var quizModel = require("../models/quizModel");

function salvar(req, res) {
    var idUsuario = req.body.idUsuario;
    var chefe = req.body.chefe;

    quizModel.salvar(idUsuario, chefe).then(function (resultado) {
        res.status(201).json({ mensagem: "Resultado salvo com sucesso!" });
    }).catch(function (erro) {
        console.log("Erro ao salvar resultado do quiz: ", erro);
        res.status(500).json({ mensagem: "Erro ao salvar resultado." });
    });
}

function listarResultados(req, res) {
    quizModel.listarResultados().then(function (resultados) {
        res.status(200).json(resultados);
    }).catch(function (erro) {
        console.log("Erro ao listar resultados do quiz: ", erro);
        res.status(500).json({ mensagem: "Erro ao listar resultados." });
    });
}

function contarPorChefe(req, res) {
    quizModel.contarPorChefe().then(function (contagem) {
        res.status(200).json(contagem);
    }).catch(function (erro) {
        console.log("Erro ao contar resultados por chefe: ", erro);
        res.status(500).json({ mensagem: "Erro ao contar resultados." });
    });
}

function buscarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    quizModel.buscarPorUsuario(idUsuario).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log("Erro ao buscar resultado do usuário: ", erro);
        res.status(500).json({ mensagem: "Erro ao buscar resultado." });
    });
}

module.exports = {
    salvar,
    listarResultados,
    contarPorChefe,
    buscarPorUsuario
};
