// Rota para criar um novo pedido
app.post('/pedido', (req, res) => {
  const { cliente, produto, quantidade } = req.body;
  const novoPedido = criarPedido(cliente, produto, quantidade);
  res.json(novoPedido);
});

// Rota para obter todos os pedidos
app.get('/pedido', (req, res) => {
  res.json(pedidos);
});

