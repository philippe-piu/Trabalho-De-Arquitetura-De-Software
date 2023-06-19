const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');

const PedidoController = require('./pedidoController');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração de Templates
app.engine('mustache', mustacheExpress());
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'mustache');

// Configuração do express
app.use(express.static(path.join(__dirname, 'src')));

// Rota principal
app.get('/', (req, res) => {
  res.render('pedido');
});

// Rota Pedido Detalhe
app.get('/pedidoDetalhe', (req, res) => {
  res.render('pedidoDetalhe');
});

//REST
app.get('/pedidos', PedidoController.getAllPedidos);
app.post('/pedidos', PedidoController.createPedido);
app.put('/pedidos/:pedidoId', PedidoController.updatePedido);
app.delete('/pedidos/:pedidoId', PedidoController.deletePedido);


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
