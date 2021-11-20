module.exports = (() => {
  let router = require("express").Router();
  const atividadeHardskillController = require("../controllers/atividade_hardskill.controller");

  router.post("/:id", async (req, res) => {
    const atividade = await atividadeHardskillController.store(
      req.body,
      req.params.id
    );
    res.json(atividade);
  });

  router.delete("/:id", async (req, res) => {
    const atividade = await atividadeHardskillController.destroy(
      req.body,
      req.params.id
    );
    res.json(atividade);
  });

  return router;
})();
