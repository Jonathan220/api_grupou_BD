const models = require("../db/models");

exports.index = async () => {
  const resultado = await models.atividade.findAll();
  return resultado;
};

exports.show = async (id) => {
  const resultado = await models.atividade.findByPk(id);
  return resultado;
};

exports.store = async (atividade) => {
  const resultado = await models.atividade.create(atividade);
  return resultado;
};

exports.update = async (atividade, id) => {
  const resultado = await models.atividade.update(atividade, {
    where: { id: id },
  });
  return resultado;
};

exports.destroy = async (id) => {
  const resultado = await models.atividade.destroy({ where: { id: id } });
  return resultado;
};
