var express = require('express');
var router = express.Router();

/* Rota Inicial*/
router.get('/', function(req, res, next) {
  res.render('pedido', { title: 'Express' });
});

module.exports = router;
