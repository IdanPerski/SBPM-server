const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const textColor = require("./chalk/terminalColors");
const router = require("./router/router");
const connectToDb = require("./DB/dbService");

const app = express();

app.use(express.json());
app.use(router);

app.use((error, req, res, next) => {
  console.log(textColor.danger("internal error"));
  return handleError(res, 500, `server internal error: ${error}`);
});

app.listen(PORT, () => {
  console.log(textColor.safe("The server is listening to port " + PORT));

  connectToDb();
});
