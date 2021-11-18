const { DataTypes } = require("sequelize");
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const sequelize = require("../index").getConnection();

const Aluno = sequelize.define(
  name,
  {
    matricula: {
      type: DataTypes.STRING(10),
    },
  },
  { sequelize, tableName: name, timestamps: false }
);

module.exports = Aluno;
