const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const db = require("./app/db/models");

db.sequelize.sync();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routes")(app);

app.listen(3000, () => {
  console.log("servidor rodando na porta 3000...");
});
