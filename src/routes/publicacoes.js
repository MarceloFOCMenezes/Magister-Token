var express = require("express");
var router = express.Router();

var publicacaoController = require("../controllers/publicacaoController");

router.post("/cadastrar", function (req, res) {
    publicacaoController.cadastrar(req, res)
})

router.post("/consultar", function (req, res) {
    publicacaoController.consultar(req, res)
})

router.get("/listar", function (req, res) {
    publicacaoController.listar(req, res)
})

router.post("/listarPubUsuario", function(req, res) {
    publicacaoController.listarPubUsuario(req, res)
})

router.post("/listarRanking", function(req, res){
    publicacaoController.listarRanking(req, res)
})

router.post("/plotarGrafico", function(req, res){
    publicacaoController.plotarGrafico(req, res)
})

module.exports = router