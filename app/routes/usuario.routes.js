module.exports = (() => {
  let router = require("express").Router();
  const usuarioController = require("../controllers/usuario.controller");

  router.get("/", (req, res) => {
    res.json({
      mensagem: "Rota acessada com sucesso",
    });
  });

  router.get("/:id", async (req, res) => {
    const usuario = await usuarioController.show(req.params.id);
    res.json(usuario);
  });

  return router;
})();
