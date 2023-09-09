const terminalColors = require("../../../chalk/terminalColors");
const Person = require("../../../users/models/mongodb/personSchema");
const roleSchema = require("../../models/mongodb/roleSchema");

const normalizeIDtoObject = async (id, roleString) => {
  const person = await Person.findById(id);
  console.log(terminalColors.danger(person));
  const personRole = person.roles.filter((personRole) => {
    console.log(terminalColors.lemon(roleString, personRole.role));
    return roleString === personRole.role;
  });

  console.log(terminalColors.danger(personRole));
  console.log(terminalColors.safe(personRole[0].role));

  return personRole[0].role;
};

module.exports = normalizeIDtoObject;
