const { DataTypes } = require("sequelize");
const name = require("path").basename(__filename.replace(".model", ""), ".js");
const sequelize = require("../index").getConnection();

const Disciplina = sequelize.define(
  name,
  {
    nome_disciplina: {
      type: DataTypes.TEXT,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "criado_em",
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "atualizado_em",
    },
  },
  { sequelize, tableName: name }
);

Disciplina.associate = (models) => {
  Disciplina.hasMany(models.turma, {
    foreignKey: {
      name: "id_disciplina",
    },
    as: "turmas",
  });

  Disciplina.belongsToMany(models.hardskill, {
    through: "disciplina_hardskill",
    timestamps: false,
    foreignKey: {
      name: "id_disciplina",
    },
    as: "hardskills",
  });

  Disciplina.belongsToMany(models.professor, {
    through: "professor_disciplina",
    timestamps: false,
    foreignKey: {
      name: "id_disciplina",
    },
    as: "professores",
  });
};

module.exports = Disciplina;
