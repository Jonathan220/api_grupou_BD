module.exports = (() => {
  let router = require("express").Router();
  const cursoTurmaController = require("../controllers/curso_turma.controller");

  router.post("/:id", async (req, res) => {
    const cursoTurma = await cursoTurmaController.store(
      req.body,
      req.params.id
    );
    res.json(cursoTurma);
  });

  router.delete("/:id", async (req, res) => {
    const cursoTurma = await cursoTurmaController.destroy(
      req.body,
      req.params.id
    );
    res.json(cursoTurma);
  });

  return router;
})();
