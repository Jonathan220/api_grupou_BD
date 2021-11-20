module.exports = (() => {
  let router = require("express").Router();
  const professorDisciplinaController = require("../controllers/professor_disciplina.controller");

  router.post("/:id", async (req, res) => {
    const professorDisciplina = await professorDisciplinaController.store(
      req.body,
      req.params.id
    );
    res.json(professorDisciplina);
  });

  router.delete("/:id", async (req, res) => {
    const professorDisciplina = await professorDisciplinaController.destroy(
      req.body,
      req.params.id
    );
    res.json(professorDisciplina);
  });

  return router;
})();
