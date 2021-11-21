const models = require("../db/models");

exports.store = async (aluno, id) => {
  const model = await models.aluno.findOne({
    where: { id_aluno: id },
    include: { association: "softskills" },
  });
  let refsSoftskills = [];
  for (let h in aluno.softskills) {
    let softskill = aluno.softskills[h];

    const [result] = await models.softskill.findOrCreate({ where: softskill });

    refsSoftskills.push(result.id);
  }
  model.addSoftskill(refsSoftskills);

  return true;
};

exports.destroy = async (aluno, id) => {
  const model = await models.aluno.findOne({
    where: { id_aluno: id },
    include: { association: "softskills" },
  });
  let refsSoftskills = [];
  for (let h in aluno.softskills) {
    let softskill = aluno.softskills[h];

    const [result] = await models.softskill.findOne({ where: softskill });
    if (result) {
      refsSoftskills.push(result.id);
    }
  }
  model.removeSoftskill(refsSoftskills);

  return true;
};
