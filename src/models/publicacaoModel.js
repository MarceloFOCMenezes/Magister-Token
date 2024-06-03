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
    SELECT p.*, u.nome,  DATE_FORMAT(dataPub, '%m/%d/%Y') as dataPublicacao FROM publicacao p JOIN usuario u ON u.idUsuario = p.fkUsuario WHERE idPub = ${idPub}
    `

    console.log(`Consultando o banco`)
    return database.executar(instrucaoSql);
}

function listar()
{
    var instrucaoSql = `
        SELECT p.*, u.nome, count(c.idComent) as qtdComent FROM publicacao p JOIN usuario u ON u.idUsuario = p.fkUsuario left join comentario c on c.fkPub = p.idPub group by(idPub) ORDER BY dataPub DESC
    `
    console.log(`Consultando o banco`)
    return database.executar(instrucaoSql)
}

function listarPubUsuario (idUsuario)
{
    var instrucaoSql = `
    SELECT p.*, u.nome, count(c.idComent) as qtdComent FROM publicacao p JOIN usuario u ON u.idUsuario = p.fkUsuario left join comentario c on c.fkPub = p.idPub WHERE p.fkUsuario = ${idUsuario} GROUP BY(idPub) ORDER BY dataPub DESC
    `

    console.log(`Consultando o Banco`)
    return database.executar(instrucaoSql)
}

function listarRanking (idUsuario)
{
    var instrucaoSql = `
    SELECT p.*, u.nome, count(c.idComent) as qtdComent FROM publicacao p JOIN usuario u ON u.idUsuario = p.fkUsuario join comentario c on c.fkPub = p.idPub WHERE p.fkUsuario = ${idUsuario} GROUP BY(idPub) 
    `
    return database.executar(instrucaoSql)
}

module.exports = {
    cadastrar,
    consultar,
    listar,
    listarPubUsuario,
    listarRanking
}