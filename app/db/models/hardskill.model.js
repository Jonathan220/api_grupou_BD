const { DataTypes } = require("sequelize");
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const sequelize = require("../index").getConnection();

const Hardskill = sequelize.define(
  name,
  {
    descricao: {
      type: DataTypes.STRING(50),
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "criado_em",
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "Atualizado_em",
    },
  },
  { sequelize, tableName: name, timestamps: false }
);

Hardskill.associate = (models) => {
  Hardskill.belongsToMany(models.aluno, {
    through: "aluno_hardskill",
    timestamps: false,
    foreignKey: {
      name: "id_hardskill",
    },
    as: "alunos",
  });
};

module.exports = Hardskill;
