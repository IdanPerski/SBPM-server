const { faker } = require("@faker-js/faker");
const textColor = require("../../chalk/terminalColors");

function generateRoundedNumber() {
  return Math.floor(Math.random() * 5) * 100 + 800;
}
const getRandomArrayElement = (array) =>
  array[Math.floor(Math.random() * array.length)];
const rolesArray = [
  "technician",
  "producer",
  "CameraOperator",
  "editor",
  "director",
  "visionMixerOperator",
  "audioEngineer",
  "vtr",
  "cg",
  "talent",
];

const generateFakePerson = () => {
  const fakePerson = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    roles: [
      {
        role: getRandomArrayElement(rolesArray),
        paymentRate: generateRoundedNumber(),
      },
    ],
    email: faker.internet.email(),
    phoneNumber: faker.phone.number("+97252#######"),
  };

  console.log(textColor.lemon(fakePerson));
  return fakePerson;
};

module.exports = generateFakePerson;
