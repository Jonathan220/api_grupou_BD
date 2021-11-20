module.exports = (() => {
  let router = require("express").Router();
  const alunoSoftskillController = require("../controllers/aluno_softskill.controller");

  router.post("/:id", async (req, res) => {
    const softskill = await alunoSoftskillController.store(
      req.body,
      req.params.id
    );
    res.json(softskill);
  });

  router.delete("/:id", async (req, res) => {
    const softskill = await alunoSoftskillController.destroy(
      req.body,
      req.params.id
    );
    res.json(softskill);
  });

  return router;
})();
