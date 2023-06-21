const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');

const PedidoController = require('./pedidoController');
const { handleDetalhePage } = require('./src/controller/detalheController');


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
app.get('/pedidoDetalhe/:pedidoId', (req, res) => {
  const pedidoId = req.params.pedidoId;
  const pedidos = PedidoController.getAllPedidos();
  const pedido = pedidos.find((p) => p.id === parseInt(pedidoId));

  if (!pedido) {
    res.status(404).send('Pedido não encontrado');
    return;
  }

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
app.get('/pedidos',);
app.post('/pedidos', PedidoController.createPedido);
app.put('/pedidos/:pedidoId', PedidoController.updatePedido);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
