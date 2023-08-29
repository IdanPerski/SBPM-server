const express = require("express");
const textColor = require("../chalk/terminalColors");
const { handleError } = require("../utils/handleErrors");
const router = express.Router();

router.get("/addProduction", (req, res) => {
  console.log(textColor.lemon("call from front"));
  res.send("hello from server");
});

router.post("/addProduction", async (req, res) => {
  console.log(textColor.safe("post production"));
  try {
    //  TODO- check req.body
    // - validate production
    // -normalize production
    // create production
  } catch (error) {
    console.log(`post error at addProduction ${error}`);
  }
});

router.use((req, res) => {
  handleError(res, 404, "Path not found");
});

module.exports = router;
