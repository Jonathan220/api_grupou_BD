module.exports = (() => {
  let router = require("express").Router();
  const turmaHardskillController = require("../controllers/turma_hardskill.controller");

  router.post("/:id", async (req, res) => {
    const turmaHardskill = await turmaHardskillController.store(
      req.body,
      req.params.id
    );
    res.json(turmaHardskill);
  });

  router.delete("/:id", async (req, res) => {
    const turmaHardskill = await turmaHardskillController.destroy(
      req.body,
      req.params.id
    );
    res.json(turmaHardskill);
  });

  return router;
})();
