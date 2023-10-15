const Person = require("../models/mongodb/personSchema");
const _ = require("lodash");
const { createError } = require("../../utils/handleErrors");
const { generateAuthToken } = require("../../auth/providers/jwt");
const { comparePassword } = require("../helpers/bycryptjs");
const config = require("config");
const terminalColors = require("../../chalk/terminalColors");
const DB = config.get("DB");

const registerUser = async (normalizedUser) => {
  console.log(normalizedUser, "!!!!!!!!!!!");
  if (DB === "MONGODB") {
    try {
      const {
        contact: { email },
      } = normalizedUser;

      let user = await Person.findOne({ email });
      if (user) {
        console.log(user);
        log;
        throw new Error("User already registered");
      }
      user = new Person(normalizedUser);
      console.log(terminalColors.safe("!!!!!!!!!!!!"), user);
      user = await user.save();
      console.log(terminalColors.lemon("!!!!!!!!!!!!"));
      user = _.pick(user, ["name", "contact", "_id"]);
      return Promise.resolve(user);
      d;
    } catch (error) {
      console.log(terminalColors.danger(error), "ERROR! ");
      return createError("Mongoose", error);
    }
  }
  return Promise.resolve("registerUser new user not in mongodb");
};

const loginUser = async ({ email, password }) => {
  if (DB === "MONGODB") {
    try {
      console.log("!!!!");
      const user = await Person.findOne({ email });
      if (!user)
        throw new Error("Authentication Error: Invalid email or password");
      const validPassword = comparePassword(password, user.password);
      console.log(validPassword);
      if (!validPassword)
        throw new Error("Authentication Error: Invalid email or password");
      const token = generateAuthToken(user);
      console.log(token);
      return Promise.resolve(token);
    } catch (error) {
      return createError("Mongoose", error);
    }
  }
  return Promise.resolve("loginUser user not in mongodb");
};

exports.registerUser = registerUser;
exports.loginUser = loginUser;
