const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  role: String,
  person: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Person",
  },
});

const productionSchema = new mongoose.Schema({
  date: Date,
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductionType",
  },
  audioEngineer: roleSchema,
  cameraOperators: [roleSchema],
  cg: roleSchema,

  director: roleSchema,
  editor: roleSchema,
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location",
  },
  producer: [roleSchema],
  talents: [roleSchema],
  technician: [roleSchema],

  visionMixerOperator: roleSchema,
  vtr: [roleSchema],
});

const Production = mongoose.model("Production", productionSchema);

module.exports = Production;
