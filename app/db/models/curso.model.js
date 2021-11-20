const { DataTypes } = require("sequelize");
const name = require("path").basename(__filename.replace(".model", ""), ".js");
const sequelize = require("../index").getConnection();

const Curso = sequelize.define(
  name,
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duracao: {
      type: DataTypes.INTEGER,
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

Curso.associate = (models) => {
  Curso.hasMany(models.aluno, {
    foreignKey: {
      name: "id_curso",
    },
    as: "alunos",
  });

  Curso.belongsToMany(models.turma, {
    through: "curso_turma",
    timestamps: false,
    foreignKey: {
      name: "id_curso",
    },
    as: "turmas",
  });
};

module.exports = Curso;
