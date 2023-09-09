const express = require("express");
const textColor = require("../chalk/terminalColors");
const { handleError } = require("../utils/handleErrors");
const fakeDataRestController = require("../faker/routes/fakeDataRestController");
const normalizeProduction = require("../productions/helpers/validations/normalizeProduction");
const {
  createProduction,
} = require("../productions/productionsAccessDataService");
const prodRouter = require("../productions/routes/prodRestController");
const router = express.Router();

router.use("/", fakeDataRestController);

router.use("/", prodRouter);

router.use((req, res) => {
  handleError(res, 404, "Path not found");
});

module.exports = router;
