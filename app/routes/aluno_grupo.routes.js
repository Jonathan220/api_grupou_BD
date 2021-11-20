module.exports = (() => {
  let router = require("express").Router();
  const alunoGrupoController = require("../controllers/aluno_grupo.controller");

  router.post("/:id", async (req, res) => {
    const grupo = await alunoGrupoController.store(req.body, req.params.id);
    res.json(grupo);
  });

  router.delete("/:id", async (req, res) => {
    const grupo = await alunoGrupoController.destroy(req.body, req.params.id);
    res.json(grupo);
  });

  return router;
})();
