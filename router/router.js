const express = require("express");
const textColor = require("../chalk/terminalColors");
const { handleError } = require("../utils/handleErrors");
const fakeDataRestController = require("../faker/routes/fakeDataRestController");
const normalizeProduction = require("../productions/helpers/validations/normalizeProduction");
const {
  createProduction,
} = require("../productions/productionsAccessDataService");
const router = express.Router();

router.use("/", fakeDataRestController);

/* TODO - production rest controller file */
router.get("/addProduction", (req, res) => {
  console.log(textColor.lemon("call from front"));
  res.send("hello from server");
});

router.post("/addProduction", async (req, res) => {
  console.log(textColor.safe("post production"));
  try {
    let production = req.body;
    console.log(production);
    const user = production.user_id;

    // -  user Authentication
    //by user_id check if the user is admin
    if (user != "admin")
      handleError(res, 403, "Authentication Error: Unauthorize user");
    // TODO validateProduction
    // ...use joi vlaidtion

    // -normalize production
    production = await normalizeProduction(production, user);
    // create production
    console.log(textColor.lemon(JSON.stringify(production, null, 2)));
    production = await createProduction(production);
    // console.log(textColor.lemon(production));
  } catch (error) {
    console.log(`post error at addProduction ${error}`);
  }
});

router.use((req, res) => {
  handleError(res, 404, "Path not found");
});

module.exports = router;
