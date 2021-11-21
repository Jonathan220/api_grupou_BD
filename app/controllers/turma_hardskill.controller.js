const models = require("../db/models");

exports.store = async (turma, id) => {
  const model = await models.turma.findOne({
    where: { id_turma: id },
    include: { association: "hardskills" },
  });
  let refsHardskills = [];
  for (let h in turma.hardskills) {
    let hardskill = turma.hardskills[h];

    const [result] = await models.turma.findOrCreate({
      where: hardskill,
    });

    refsHardskills.push(result.id);
  }
  model.addtTurma(refsHardskills);

  return true;
};

exports.destroy = async (turma, id) => {
  const model = await models.turma.findOne({
    where: { id_turma: id },
    include: { association: "hardskills" },
  });
  let refsHardskills = [];
  for (let h in turma.hardskills) {
    let hardskill = turma.hardskills[h];

    const [result] = await models.turma.findOne({ where: hardskill });
    if (result) {
      refsHardskills.push(result.id);
    }
  }
  model.removeTurma(refsHardskills);

  return true;
};
