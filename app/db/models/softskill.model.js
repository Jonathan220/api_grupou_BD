const { DataTypes } = require("sequelize");
const name = require("path").basename(__filename.replace(".model", ""), ".js");
const sequelize = require("../index").getConnection();

const Softskill = sequelize.define(
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
  { sequelize, tableName: name }
);

Softskill.associate = (models) => {
  Softskill.belongsToMany(models.avaliacao360, {
    through: "avaliacao360_softskill",
    timestamps: false,
    foreignKey: {
      name: "id_softskill",
    },
    as: "avaliacoes360",
  });
  Softskill.belongsToMany(models.aluno, {
    through: "aluno_softskill",
    timestamps: false,
    foreignKey: {
      name: "id_softskill",
    },
    as: "alunos",
  });
};

module.exports = Softskill;
