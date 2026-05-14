var database = require("../database/config");

function favoritar(idUsuario, idChefe) {
    var instrucaoSql = `INSERT INTO usuario_chefe_favorito (fk_usuario, fk_chefe)
        VALUES (${idUsuario}, ${idChefe});
    `;
    return database.executar(instrucaoSql);
}

function desfavoritar(idUsuario, idChefe) {
    var instrucaoSql = `DELETE FROM usuario_chefe_favorito
        WHERE fk_usuario = ${idUsuario} AND fk_chefe = ${idChefe};
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    favoritar,
    desfavoritar
};