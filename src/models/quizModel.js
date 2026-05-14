var database = require("../database/config");

function salvar(idUsuario, chefe) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvar(): ", idUsuario, chefe);

    var instrucaoSql = `
        INSERT INTO quiz_resultado (fk_usuario, chefe) VALUES (${idUsuario}, '${chefe}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarResultados() {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarResultados()");

    var instrucaoSql = `
        SELECT 
            qr.id,
            qr.chefe,
            qr.data_resposta,
            u.nome,
            u.email
        FROM quiz_resultado qr
            INNER JOIN usuario u
                ON qr.fk_usuario = u.id
        ORDER BY qr.data_resposta DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contarPorChefe() {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function contarPorChefe()");

    var instrucaoSql = `
        SELECT 
            chefe,
            COUNT(*) AS total
        FROM quiz_resultado
        GROUP BY chefe
        ORDER BY total DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPorUsuario(idUsuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarPorUsuario(): ", idUsuario);

    var instrucaoSql = `
        SELECT chefe, data_resposta 
        FROM quiz_resultado 
        WHERE fk_usuario = ${idUsuario}
        ORDER BY data_resposta DESC
        LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    salvar,
    listarResultados,
    contarPorChefe,
    buscarPorUsuario
};
