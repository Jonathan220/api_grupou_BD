const dotenv = require("dotenv").config();

module.exports = {
  HOST: "localhost",
  USER: process.env.USER_DATABASE,
  PASSWORD: process.env.PASSWORD_DATABASE,
  DB: process.env.BANCO_DATABASE,
  dialect: "mysql",
  port: process.env.PORT,
};
