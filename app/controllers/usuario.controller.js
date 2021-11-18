const models = require("../db/models");
exports.show = async (id) => {
  const resultado = await models.usuario.findByPk(id);
  return resultado;
};
