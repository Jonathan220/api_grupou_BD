const { DataTypes } = require("sequelize");
const name = require("path").basename(__filename.replace(".model", ""), ".js");
const sequelize = require("../index").getConnection();

const Atividade = sequelize.define(
  name,
  {
    descricao: {
      type: DataTypes.STRING(50),
    },
    nota: {
      type: DataTypes.FLOAT,
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

Atividade.associate = (models) => {
  Atividade.belongsToMany(models.hardskill, {
    through: "atividade_hardskill",
    timestamps: false,
    foreignKey: {
      name: "id_atividade",
    },
    as: "hardskills",
  });
  Atividade.belongsTo(models.turma, {
    foreignKey: {
      name: "id_turma",
    },
    as: "turma",
  });
  Atividade.hasMany(models.avaliacao360, {
    foreignKey: {
      name: "id_atividade",
    },
    as: "avaliacoes",
  });
  Atividade.hasMany(models.grupo, {
    foreignKey: {
      name: "id_atividade",
    },
    as: "grupos",
  });
};

module.exports = Atividade;
