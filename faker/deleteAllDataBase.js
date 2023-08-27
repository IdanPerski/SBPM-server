const Location = require("../productions/models/mongodb/locationSchema");
const Person = require("../productions/models/mongodb/personSchema");
const ProductionType = require("../productions/models/mongodb/producionTypeSchema");
const Production = require("../productions/models/mongodb/productionSchema");
const textColor = require("../chalk/terminalColors");

const deleteAllDataBase = async () => {
  try {
    // Delete all data from collections
    await Person.deleteMany({});
    await Location.deleteMany({});
    await ProductionType.deleteMany({});
    await Production.deleteMany({});

    console.log(textColor.warning("database deleted successfully."));
  } catch (error) {
    console.error(textColor.danger("Error deleting database:", error));
  }
};

module.exports = deleteAllDataBase;
