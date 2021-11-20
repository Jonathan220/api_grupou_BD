const { DataTypes } = require("sequelize");
const name = require("path").basename(__filename.replace(".model", ""), ".js");
const sequelize = require("../index").getConnection();

const Grupo = sequelize.define(
  name,
  {
    nome_grupo: {
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

Grupo.associate = (models) => {
  Grupo.belongsTo(models.atividade, {
    foreignKey: {
      name: "id_atividade",
    },
    as: "atividade",
  });
  Grupo.belongsTo(models.turma, {
    foreignKey: {
      name: "id_turma",
    },
    as: "turma",
  });
  Grupo.hasMany(models.tarefa, {
    foreignKey: {
      name: "id_grupo",
    },
    as: "tarefas",
  });
  Grupo.hasMany(models.avaliacao360, {
    foreignKey: {
      name: "id_grupo",
    },
    as: "avaliacoes360",
  });
  Grupo.belongsToMany(models.aluno, {
    through: "aluno_grupo",
    timestamps: false,
    foreignKey: {
      name: "id_grupo",
    },
    as: "alunos",
  });
};

module.exports = Grupo;
