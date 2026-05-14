var express = require("express");
var router = express.Router();

var favoritoController = require("../controllers/favoritoController");

router.post("/favoritar", function (req, res) {
    favoritoController.favoritar(req, res);
});

router.delete("/desfavoritar/:idUsuario/:idChefe", function (req, res) {
    favoritoController.desfavoritar(req, res);
});

module.exports = router;