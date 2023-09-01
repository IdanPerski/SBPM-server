const config = require("config");
const connectToDb = require("../../DB/dbService");
const validateProduction = require("../helpers/validations/");
const textColors = require("../chalk/terminalColors");
const { createError, handleError } = require("../utils/handleErrors");
const Production = require("./models/mongodb/productionSchema");

const DB = config.get("DB");

const createProduction = async (normalizedProduction) => {
  if (DB === "MONGODB") {
    try {
      let production = new Production(normalizedProduction);
      await production.save();
      return Promise.resolve(production);
    } catch (error) {
      console.log(error);
      return createError("Mongoose", error);
    }
  }
  return Promise.resolve("createCard not in mongodb");
};
