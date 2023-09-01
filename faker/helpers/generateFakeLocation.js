const { faker } = require("@faker-js/faker");
const Location = require("../../productions/models/mongodb/locationSchema");
const textColor = require("../../chalk/terminalColors");
const getRandomArrayElement = (array) =>
  array[Math.floor(Math.random() * array.length)];

const sportsArenaNames = [
  "Sports Arena",
  "Stadium One",
  "Arena Central",
  "Victory Stadium",
  "Grand Arena",
  "Champion Stadium",
  "Olympic Park",
  "Elite Arena",
  "Star Stadium",
  "Legacy Arena",
];
const generateFakeLocation = () => {
  return {
    name: getRandomArrayElement(sportsArenaNames),
    address: {
      city: faker.location.city(),
      street: faker.location.streetAddress(),
    },
    contactPerson: {
      name: faker.person.firstName(),
      role: "stadium menager",
      contact: {
        phoneNumber: faker.phone.imei(),
        email: faker.internet.email(),
      },
    },
  };
};

module.exports = generateFakeLocation;