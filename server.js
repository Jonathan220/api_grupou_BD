const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const db = require("./app/db/models");

// db.sequelize.sync();

// db.sequelize.sync({ force: true });

//body parse está deprecado

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./app/routes")(app);

app.listen(3000, () => {
  console.log("servidor rodando na porta 3000...");
});
