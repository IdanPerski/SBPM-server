const config = require("config");
const connectToDb = require("../DB/dbService");
const textColors = require("../chalk/terminalColors");
const { createError, handleError } = require("../utils/handleErrors");
const Production = require("./models/mongodb/productionSchema");
const terminalColors = require("../chalk/terminalColors");
const ProductionType = require("./models/mongodb/producionTypeSchema");
const currentTime = require("../utils/timeService");
const getWeatherIcon = require("../weatherApi/accessesWeatherApi");

const fieldCrew = "fieldCrew";
const DB = config.get("DB");
const getProductions = async () => {
  if (DB === "MONGODB") {
    try {
      const productions = await Production.find();

      console.log(productions, "productions");
      return Promise.resolve(productions);
    } catch (error) {
      error.status = 404;
      return createError("Mongoose", error);
    }
  }
  return Promise.resolve("getProductions not in mongodb");
};
const getProductionsForMainTable = async () => {
  if (DB === "MONGODB") {
    try {
      const productions = await Production.find().populate("location");
      const productionDetails = await Promise.all(
        productions.map(async (_production) => {
          const _id = _production._id;
          const locationName = `${_production.location.name}, ${_production.location.address.city}`;
          const { day, month, year } = currentTime(_production.date);

          const date = `${day}/${month}/${year}`;
          // console.log(terminalColors.lemon(_production.location.address.city));

          const weatherData = await getWeatherIcon(
            _production.location.address.city,
          );

          return {
            _id,
            locationName,
            date,
            weatherData,
          };
        }),
      );

      console.log("Extracted Values:", productionDetails);
      return Promise.resolve(productionDetails);
    } catch (error) {
      console.log(
        terminalColors.danger("error from getProductionsForMainTable"),
      );
      error.status = 404;
      return createError("Mongoose", error);
    }
  }
  return Promise.resolve("getProductions not in mongodb");
};

const createProduction = async (normalizedProduction) => {
  if (DB === "MONGODB") {
    try {
      let production = new Production(normalizedProduction);
      await production.save();
      console.log(textColors.safe("production created at mongo:"), production);
      return Promise.resolve(production);
    } catch (error) {
      console.log(error);
      return createError("Mongoose", error);
    }
  }
  return Promise.resolve("createProduction not in mongodb");
};

exports.createProduction = createProduction;
exports.getProductions = getProductions;
exports.getProductionsForMainTable = getProductionsForMainTable;
