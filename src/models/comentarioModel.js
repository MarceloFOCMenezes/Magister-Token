var database = require("../database/config")

function cadastrar(idPub, idUsuario, comentario)
{
    var instrucaoSql = `
    INSERT INTO comentario (fkPub, fkUsuario, comentario) VALUES 
    (${idPub}, ${idUsuario}, '${comentario}')
    `
    console.log(`Foram inseridos $id}, ${idPub}, ${idUsuario}, ${comentario}`)
    return database.executar(instrucaoSql)

}

function listar(idPub)
{
    var instrucaoSql = `
    SELECT c.*, u.nome FROM comentario as c JOIN usuario as u ON c.fkUsuario = u.idUsuario WHERE fkPub = ${idPub} ORDER BY dataComent DESC
    `

    console.log(`Consultando o banco`)
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    listar
}