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

module.exports = router