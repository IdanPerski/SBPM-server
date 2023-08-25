const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: {
    city: String,
    street: String,
    required: true,
  },
  contactPerson: {
    name: String,
    role: String,
    contact: {
      phoneNumber: String,
      email: String,
    },
  },
});

const Location = mongoose.model("Location ", locationSchema);

module.exports = Location;
