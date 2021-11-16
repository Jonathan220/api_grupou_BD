module.exports = (() => {
  let router = require("express").Router();
  const usuarioController = require("../controllers/usuario.controller");

  router.get("/", (req, res) => {
    res.json({
      mensagem: "Rota acessada com sucesso",
    });
  });

  router.get("/:id", (req, res) => {
    const usuario = usuarioController.show(req.params.id);
    res.json(usuario);
  });

  return router;
})();