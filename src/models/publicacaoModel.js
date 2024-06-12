var database = require("../database/config")

function cadastrar(idUsuario, sistema, titulo, historia)
{
    var instrucaoSql = `
    INSERT INTO publicacao (fkUsuario, sistema, titulo, historia) VALUES 
    (${idUsuario}, '${sistema}', '${titulo}', '${historia}')
    `
    console.log(`Foram inseridos ${idUsuario}, ${sistema}, ${titulo}, ${historia}`)
    return database.executar(instrucaoSql)

}

function consultar(idPub)
{
    var instrucaoSql = `
    SELECT p.*, u.nome,  DATE_FORMAT(dataPub, '%d/%m/%Y') as dataPublicacao FROM publicacao p JOIN usuario u ON u.idUsuario = p.fkUsuario WHERE idPub = ${idPub}
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
    SELECT p.idPub, p.titulo, p.historia, p.dataPub, u.nome, COUNT(c.idComent) AS qtdComent FROM publicacao p JOIN usuario u ON u.idUsuario = p.fkUsuario JOIN comentario c ON c.fkPub = p.idPub WHERE p.fkUsuario = ${idUsuario} GROUP BY p.idPub, p.titulo, p.historia, p.dataPub, u.nome ORDER BY qtdComent DESC;
    `
    return database.executar(instrucaoSql)
}

function plotarGrafico (fkUsuario)
{
    var instrucaoSql = `
    SELECT sistema, COUNT(sistema) as quantidade FROM publicacao WHERE fkUsuario = ${fkUsuario} GROUP BY sistema ORDER BY sistema;
    `
    console.log(instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = {
    cadastrar,
    consultar,
    listar,
    listarPubUsuario,
    listarRanking,
    plotarGrafico
}