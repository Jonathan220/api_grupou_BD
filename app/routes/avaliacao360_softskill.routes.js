module.exports = (() => {
  let router = require("express").Router();
  const avaliacao360SoftskillController = require("../controllers/avaliacao360_softskill.controller");

  router.post("/:id", async (req, res) => {
    const avaliacao360Softskill = await avaliacao360SoftskillController.store(
      req.body,
      req.params.id
    );
    res.json(avaliacao360Softskill);
  });

  router.delete("/:id", async (req, res) => {
    const avaliacao360Softskill = await avaliacao360SoftskillController.destroy(
      req.body,
      req.params.id
    );
    res.json(avaliacao360Softskill);
  });

  return router;
})();
