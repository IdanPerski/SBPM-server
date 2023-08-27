const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  person: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Person",
  },
  role: String,
});

module.exports = mongoose.model("Role", roleSchema);
