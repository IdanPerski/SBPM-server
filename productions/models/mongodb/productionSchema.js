const mongoose = require("mongoose");

const Role = require("./roleSchema");

const refAtach = (ref) => {
  return {
    type: mongoose.Schema.Types.ObjectId,
    ref: ref,
  };
};

const productionSchema = new mongoose.Schema({
  date: Date,
  ProductionType: refAtach("ProductionType"),
  audioEngineer: refAtach("Role"),
  cameraOperators: [refAtach("Role")],
  cg: refAtach("Role"),

  director: refAtach("Role"),
  editor: refAtach("Role"),
  location: refAtach("Location"),
  producer: [refAtach("Role")],
  talents: [refAtach("Role")],
  technician: [refAtach("Role")],

  visionMixerOperator: refAtach("Role"),
  vtr: [refAtach("Role")],
});

const Production = mongoose.model("Production", productionSchema);

module.exports = Production;
