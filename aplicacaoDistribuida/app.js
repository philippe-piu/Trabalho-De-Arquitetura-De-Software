const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const PedidoController = require('./pedidoController');
const { handleDetalhePage } = require('./src/controller/detalheController');


const app = express();
//Porta servidor localhost:3000
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração de Templates Mustache
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
app.get('/pedidoDetalhe/:pedidoId', (req, res) => {
  const pedidoId = req.params.pedidoId;
  //Pega os pedidos
  const pedidos = PedidoController.getAllPedidos();
  //procura os pedidos pelo o ID
  const pedido = pedidos.find((p) => p.id === parseInt(pedidoId));

  //se o pedido não foi encontrado ele da erro
  if (!pedido) {
    res.status(404).send('Pedido não encontrado');
    return;
  }

  //mostra o pedido na tela se encontrado
  res.render('pedidoDetalhe', { pedido });
});

// Rota Pedido Detalhe Excluir
app.delete('/pedidoDetalhe/:pedidoId', (req, res) => {
  const pedidoId = req.params.pedidoId;
  const pedido = PedidoController.getPedidoById(pedidoId);

  if (!pedido) {
    res.status(404).send('Pedido não encontrado');
    return;
  }

  PedidoController.deletePedido(pedidoId);
  res.send('Pedido excluído com sucesso');
});

//REST
// Rota para obter todos os pedidos
app.get('/pedidos', (req, res) => {
  PedidoController.getAllPedidos(req, res);
});
app.post('/pedidos', PedidoController.createPedido);
app.put('/pedidos/:pedidoId', PedidoController.updatePedido);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
