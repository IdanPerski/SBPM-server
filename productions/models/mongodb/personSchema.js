const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  roles: [
    {
      role: String,
      paymentRate: Number,
    },
  ],
  email: String,
  phoneNumber: String,
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
