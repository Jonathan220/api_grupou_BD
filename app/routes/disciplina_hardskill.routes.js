module.exports = (() => {
  let router = require("express").Router();
  const disciplinaHardskillController = require("../controllers/disciplina_hardskill.controller");

  router.post("/:id", async (req, res) => {
    const disciplinaHardskill = await disciplinaHardskillController.store(
      req.body,
      req.params.id
    );
    res.json(disciplinaHardskill);
  });

  router.delete("/:id", async (req, res) => {
    const disciplinaHardskill = await disciplinaHardskillController.destroy(
      req.body,
      req.params.id
    );
    res.json(disciplinaHardskill);
  });

  return router;
})();
