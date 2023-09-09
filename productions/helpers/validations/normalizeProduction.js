const terminalColors = require("../../../chalk/terminalColors");
const normalizeIDtoObject = require("./normalizeIDtoObject");

const normalizeProduction = async (production, userId) => {
  // await normalizeIDtoObject(production.controlRoomCrew.director, "director");
  // await normalizeIDtoObject(
  //   production.controlRoomCrew.visionMixerOperator,
  //   "visionMixerOperator",
  // );
  // await normalizeIDtoObject(production.controlRoomCrew.cg, "cg");
  // normalizeIDtoObject(production.controlRoomCrew.editor, "editor");
  // await normalizeIDtoObject(
  //   production.controlRoomCrew.audioEngineer,
  //   "audioEngineer",
  // );
  const wheather = "callApi"; //TODO- call to wheather api and add it to prodction object according to the date

  return {
    date: production.date,
    ProductionType: production.type,
    location: production.location,
    fieldCrew: production.fieldCrew,
    controlRoomCrew: production.controlRoomCrew,
    talents: production.talents,
    wheather: wheather,
    createdBy: userId,
  };
};
module.exports = normalizeProduction;
