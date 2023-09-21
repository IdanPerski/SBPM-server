const express = require("express");
const { handleError } = require("../../utils/handleErrors");
const {
  createProduction,
  getProductions,
  getProductionsForMainTable,
} = require("../productionsAccessDataService");
const terminalColors = require("../../chalk/terminalColors");
const normalizeProduction = require("../helpers/validations/normalizeProduction");
const auth = require("../../auth/authService");
const prodRouter = express.Router();

prodRouter.get("/", async (req, res) => {
  console.log(terminalColors.safe("call from homePage"));

  try {
    const productions = await getProductionsForMainTable();
    return res.send(productions);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

prodRouter.post("/addProduction", async (req, res) => {
  console.log(terminalColors.safe("post production"));
  try {
    let production = req.body;
    const user = production.user_id;

    // -  user Authentication (middelware)
    //by user_id check if the user is admin
    if (user != "admin")
      handleError(res, 403, "Authentication Error: Unauthorize user");
    // TODO validateProduction
    // ...use joi vlaidtion

    // -normalize production
    production = await normalizeProduction(production, user);
    console.log(terminalColors.lemon("normalizeProduction:"), production);
    production = await createProduction(production);
  } catch (error) {
    console.log(`post error at addProduction ${error}`);
  }
});

prodRouter.delete("/:id", auth, async (req, res) => {
  try {
    const productionId = req.params.id;
    const user = req.user;
    // console.log(req);
    console.log(terminalColors.danger(productionId));
    console.log(terminalColors.danger(req));
    const productionToDelete = await deleteCard(productionId, user);
    return res.send(productionToDelete);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

module.exports = prodRouter;
