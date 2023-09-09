const mongoose = require("mongoose");

const refAtach = (ref) => {
  const dataBaseValue = {
    type: mongoose.Schema.Types.ObjectId,
    ref: ref,
  };
  return dataBaseValue;
};

const productionSchema = new mongoose.Schema({
  date: Date,
  ProductionType: refAtach("ProductionType"),
  location: refAtach("Location"),
  controlRoomCrew: {
    audioEngineer: refAtach("Role"),
    director: refAtach("Role"),
    editor: refAtach("Role"),
    visionMixerOperator: refAtach("Role"),
    vtr: [refAtach("Role")],
    cg: refAtach("Role"),
  },
  fieldCrew: {
    producer: [refAtach("Role")],
    technician: [refAtach("Role")],
    cameraOperators: [refAtach("Role")],
  },

  talents: [refAtach("Role")],
  wheather: String,
});

const Production = mongoose.model("Production", productionSchema);

module.exports = Production;
