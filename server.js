const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    mensagem: "Rota acessada com sucesso",
  });
});

app.listen(3000, () => {
  console.log("servidor rodando na porta 3000...");
});
