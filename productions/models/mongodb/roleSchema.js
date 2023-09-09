const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  person: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Person",
  },
  role: String,
});

const Role = mongoose.model("Role", roleSchema);

// Export the Role model
module.exports = Role;
