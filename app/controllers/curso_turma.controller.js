const models = require("../db/models");

exports.store = async (curso, id) => {
  const model = await models.curso.findOne({
    where: { id_curso: id },
    include: { association: "turmas" },
  });
  let refsTurmas = [];
  for (let h in curso.turmas) {
    let turma = curso.turmas[h];

    const [result] = await models.turma.findOrCreate({ where: turma });

    refsTurmas.push(result.id);
  }
  model.addTurma(refsTurmas);

  return true;
};

exports.destroy = async (curso, id) => {
  const model = await models.curso.findOne({
    where: { id_curso: id },
    include: { association: "turmas" },
  });
  let refsTurmas = [];
  for (let h in curso.turmas) {
    let turma = curso.turmas[h];

    const [result] = await models.turma.findOne({ where: turma });
    if (result) {
      refsTurmas.push(result.id);
    }
  }
  model.removeTurma(refsTurmas);

  return true;
};
