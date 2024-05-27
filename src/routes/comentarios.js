var express = require("express");
var router = express.Router();

var comentarioController = require("../controllers/comentarioController")
router.post("/cadastrar", function(req,res){
    comentarioController.cadastrar(req,res)
})
router.post("/listar", function(req,res){
    comentarioController.listar(req,res)
})

module.exports = router