var database = require("../database/config")

function cadastrar(idUsuario, sistema, titulo, historia)
{
    var instrucaoSql = `
    INSERT INTO publicacao (fkUsuario, sistema, titulo, historia) VALUES 
    (${idUsuario}, '${sistema}', '${titulo}', '${historia}')
    `
    console.log(`Foram inseridos $id}, ${sistema}, ${titulo}, ${historia}`)
    return database.executar(instrucaoSql)

}

function consultar(idPub)
{
    var instrucaoSql = `
    SELECT p.*, u.nome FROM publicacao p JOIN usuario u ON u.idUsuario = p.fkUsuario WHERE idPub = ${idPub}
    `

    console.log(`Consultando o banco`)
    return database.executar(instrucaoSql);
}

function listar()
{
    var instrucaoSql = `
        SELECT p.*, u.nome FROM publicacao p JOIN usuario u ON u.idUsuario = p.fkUsuario ORDER BY dataPub DESC
    `
    console.log(`Consultando o banco`)
    return database.executar(instrucaoSql)
}

module.exports = {
    cadastrar,
    consultar,
    listar
}