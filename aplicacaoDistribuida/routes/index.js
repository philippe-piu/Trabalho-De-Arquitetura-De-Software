var express = require('express');
var router = express.Router();

//Rota Principal
router.get('/', (req, res) => {
  res.render('home');
});

//Rota de Login
router.get('/login', (req, res) => {
  res.render('login');
});

//Fota de da Home
router.get('/home', (req, res) => {
  res.render('home');
});

module.exports = router;