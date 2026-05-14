var favoritoModel = require("../models/favoritoModel");

function favoritar(req, res) {
    var idUsuario = req.body.idUsuario;
    var idChefe = req.body.idChefe;

    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else if (idChefe == undefined) {
        res.status(400).send("O id do chefe está undefined!");
    } else {
        favoritoModel.favoritar(idUsuario, idChefe)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao favoritar! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function desfavoritar(req, res) {
    var idUsuario = req.params.idUsuario;
    var idChefe = req.params.idChefe;

    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else if (idChefe == undefined) {
        res.status(400).send("O id do chefe está undefined!");
    } else {
        favoritoModel.desfavoritar(idUsuario, idChefe)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao desfavoritar! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    favoritar,
    desfavoritar
};