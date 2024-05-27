var comentarioModel = require("../models/comentarioModel")

function cadastrar(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var idPub = req.body.idPubServer;
    var comentario = req.body.comentarioServer;

    if (comentario == undefined) {
        res.status(400).send('O comentario está undefined')
    }
    else {
        comentarioModel.cadastrar(idPub, idUsuario, comentario)
            .then(
                function (resultado) {
                    res.json(resultado)
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a publicação! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                })

    }
}

function listar(req, res) {
    var idPub = req.body.idPubServer;

    comentarioModel.listar(idPub)
        .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports =
{
    cadastrar,
    listar
}