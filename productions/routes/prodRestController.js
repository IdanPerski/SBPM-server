const express = require("express");
const { handleError } = require("../../utils/handleErrors");
const { createProduction } = require("../productionsAccessDataService");
const terminalColors = require("../../chalk/terminalColors");
const normalizeProduction = require("../helpers/validations/normalizeProduction");
const prodRouter = express.Router();

prodRouter.get("/addProduction", (req, res) => {
  console.log(terminalColors.lemon("call from front"));
  res.send("hello from server");
});

prodRouter.post("/addProduction", async (req, res) => {
  console.log(terminalColors.safe("post production"));
  try {
    let production = req.body;
    // console.log(production);
    const user = production.user_id;

    // -  user Authentication (middelware)
    //by user_id check if the user is admin
    if (user != "admin")
      handleError(res, 403, "Authentication Error: Unauthorize user");
    // TODO validateProduction
    // ...use joi vlaidtion

    // -normalize production
    production = await normalizeProduction(production, user);
    console.log(production);
    production = await createProduction(production);
    // console.log(textColor.lemon(production));
  } catch (error) {
    console.log(`post error at addProduction ${error}`);
  }
});

module.exports = prodRouter;
