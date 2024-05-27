var publicacaoModel = require("../models/publicacaoModel");

function cadastrar(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var titulo = req.body.tituloServer;
    var sistema = req.body.sistemaServer;
    var historia = req.body.historiaServer;

    if (titulo == undefined) {
        res.status(400).send('O título está undefined')
    }
    else if (sistema == undefined) {
        res.stauts(400).send('O sistema está undefined')
    }
    else if (historia == undefined) {
        res.status(400).send('A história está undefined')
    }
    else {

        publicacaoModel.cadastrar(idUsuario, sistema, titulo, historia)
            .then(
                function (resultado) {
                    res.json(resultado);
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

function consultar(req, res) {
    var idPub = req.body.idPubServer;

    publicacaoModel.consultar(idPub)
        .then(
            function (resultado) {
                if (resultado.length == 1) {
                    res.json({
                        titulo: resultado[0].titulo,
                        sistema: resultado[0].sistema,
                        historia: resultado[0].historia,
                        nome: resultado[0].nome
                    })

                    console.log(resultado)
                    console.log(JSON.stringify(resultado))

                } else {
                    res.status(204).json("Nunhuma página encontrada")
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar a publicacao");
                res.status(500).json(erro.sqlMessage)
            }

        )
}

function listar(req, res) {
    publicacaoModel.listar()
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

module.exports = {
    cadastrar,
    consultar,
    listar
}

