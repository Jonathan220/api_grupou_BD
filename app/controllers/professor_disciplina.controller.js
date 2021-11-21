const models = require("../db/models");

exports.store = async (professor, id) => {
  const model = await models.professor.findOne({
    where: { id_professor: id },
    include: { association: "disciplinas" },
  });
  let refsDisciplinas = [];
  for (let h in professor.disciplinas) {
    let disciplina = professor.disciplinas[h];

    const [result] = await models.disciplina.findOrCreate({
      where: disciplina,
    });

    refsDisciplinas.push(result.id);
  }
  model.addDisciplina(refsDisciplinas);

  return true;
};

exports.destroy = async (professor, id) => {
  const model = await models.professor.findOne({
    where: { id_professor: id },
    include: { association: "disciplinas" },
  });
  let refsDisciplinas = [];
  for (let h in professor.disciplinas) {
    let disciplina = professor.disciplinas[h];

    const [result] = await models.disciplina.findOne({ where: disciplina });
    if (result) {
      refsDisciplinas.push(result.id);
    }
  }
  model.removeDisciplina(refsDisciplinas);

  return true;
};
