const normalizeProduction = async (production, userId) => {
  const wheather = "callApi"; //TODO- call to wheather api and add it to prodction object according to the date

  return {
    date: production.date,
    type: production.type,
    location: production.location,
    fieldCrew: production.fieldCrew,
    controlRoomCrew: production.controlRoomCrew,
    talents: production.talents,
    wheather: wheather,
    createdBy: userId,
  };
};
module.exports = normalizeProduction;
