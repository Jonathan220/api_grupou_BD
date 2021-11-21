const models = require("../db/models");

exports.store = async (atividade, id) => {
  const model = await models.atividade.findOne({
    where: { id_atividade: id },
    include: { association: "hardskills" },
  });
  let refsHardskills = [];
  for (let h in atividade.hardskills) {
    let hardskill = atividade.hardskills[h];

    const [result] = await models.hardskill.findOrCreate({ where: hardskill });

    refsHardskills.push(result.id);
  }
  model.addHardskill(refsHardskills);

  return true;
};

exports.destroy = async (atividade, id) => {
  const model = await models.atividade.findOne({
    where: { id_atividade: id },
    include: { association: "hardskills" },
  });
  let refsHardskills = [];
  for (let h in atividade.hardskills) {
    let hardskill = atividade.hardskills[h];

    const [result] = await models.hardskill.findOne({ where: hardskill });
    if (result) {
      refsHardskills.push(result.id);
    }
  }
  model.removeHardskill(refsHardskills);

  return true;
};
