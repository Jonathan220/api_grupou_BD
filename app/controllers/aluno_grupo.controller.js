const models = require("../db/models");

exports.store = async (aluno, id) => {
  const model = await models.aluno.findOne({
    where: { id_aluno: id },
    include: { association: "grupos" },
  });
  let refsGrupos = [];
  for (let h in aluno.grupos) {
    let grupo = aluno.grupos[h];

    const [result] = await models.grupo.findOrCreate({ where: grupo });

    refsGrupos.push(result.id);
  }
  model.addGrupo(refsGrupos);

  return true;
};

exports.destroy = async (aluno, id) => {
  const model = await models.aluno.findOne({
    where: { id_aluno: id },
    include: { association: "grupos" },
  });
  let refsGrupos = [];
  for (let h in aluno.grupos) {
    let grupo = aluno.grupos[h];

    const [result] = await models.grupo.findOne({ where: grupo });
    if (result) {
      refsGrupos.push(result.id);
    }
  }
  model.removeGrupo(refsGrupos);

  return true;
};
