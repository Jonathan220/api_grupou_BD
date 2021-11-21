const models = require("../db/models");

exports.store = async (professor, id) => {
  const model = await models.professor.findOne({
    where: { id_professor: id },
    include: { association: "turmas" },
  });
  let refsTurmas = [];
  for (let h in professor.turmas) {
    let turma = professor.turmas[h];

    const [result] = await models.turma.findOrCreate({
      where: turma,
    });

    refsTurmas.push(result.id);
  }
  model.addtTurma(refsTurmas);

  return true;
};

exports.destroy = async (professor, id) => {
  const model = await models.professor.findOne({
    where: { id_professor: id },
    include: { association: "turmas" },
  });
  let refsTurmas = [];
  for (let h in professor.turmas) {
    let turma = professor.turmas[h];

    const [result] = await models.turma.findOne({ where: turma });
    if (result) {
      refsTurmas.push(result.id);
    }
  }
  model.removeTurma(refsTurmas);

  return true;
};
