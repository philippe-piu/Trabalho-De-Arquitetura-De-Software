var express = require('express');
var router = express.Router();
var pedidoController = require('../public/javascripts/controller/pedidoController')

router.get('/', function(req, res, next) {
  res.render('pedido');
});

// Rota para criar um novo pedido
//Verificar
//router.post('/pedidos', pedidoController.criarPedido);




module.exports = router;
