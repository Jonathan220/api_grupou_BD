module.exports = (() => {
  let router = require("express").Router();
  const professorTurmaController = require("../controllers/professor_turma.controller");

  router.post("/:id", async (req, res) => {
    const professorTurma = await professorTurmaController.store(
      req.body,
      req.params.id
    );
    res.json(professorTurma);
  });

  router.delete("/:id", async (req, res) => {
    const professorTurma = await professorTurmaController.destroy(
      req.body,
      req.params.id
    );
    res.json(professorTurma);
  });

  return router;
})();
