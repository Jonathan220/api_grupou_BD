module.exports = (() => {
  let router = require("express").Router();
  const alunoTurmaController = require("../controllers/aluno_turma.controller");

  router.post("/:id", async (req, res) => {
    const turma = await alunoTurmaController.store(req.body, req.params.id);
    res.json(turma);
  });

  router.delete("/:id", async (req, res) => {
    const turma = await alunoTurmaController.destroy(req.body, req.params.id);
    res.json(turma);
  });

  return router;
})();
