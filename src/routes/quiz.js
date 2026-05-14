var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

// Salva o resultado do quiz de um usuário
router.post("/salvar", function (req, res) {
    quizController.salvar(req, res);
});

// Retorna todos os resultados com nome do usuário (para a dashboard)
router.get("/resultados", function (req, res) {
    quizController.listarResultados(req, res);
});

// Retorna a contagem de cada chefe (para o gráfico)
router.get("/contagem", function (req, res) {
    quizController.contarPorChefe(req, res);
});

// Retorna o resultado do quiz de um usuário específico
router.get("/usuario/:idUsuario", function (req, res) {
    quizController.buscarPorUsuario(req, res);
});

module.exports = router;
