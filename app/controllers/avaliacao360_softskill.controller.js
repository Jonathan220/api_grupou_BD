const models = require("../db/models");

exports.store = async (avaliacao360, id) => {
  const model = await models.avaliacao360.findOne({
    where: { id_avaliacao360: id },
    include: { association: "softskills" },
  });
  let refsSoftskills = [];
  for (let h in avaliacao360.softskills) {
    let softskill = avaliacao360.softskills[h];

    const [result] = await models.softskill.findOrCreate({ where: softskill });

    refsSoftskills.push(result.id);
  }
  model.addSoftskill(refsSoftskills);

  return true;
};

exports.destroy = async (avaliacao360, id) => {
  const model = await models.avaliacao360.findOne({
    where: { id_avaliacao360: id },
    include: { association: "softskills" },
  });
  let refsSoftskills = [];
  for (let h in avaliacao360.softskills) {
    let softskill = avaliacao360.softskills[h];

    const [result] = await models.softskill.findOne({ where: softskill });
    if (result) {
      refsSoftskills.push(result.id);
    }
  }
  model.removeSoftskill(refsSoftskills);

  return true;
};
