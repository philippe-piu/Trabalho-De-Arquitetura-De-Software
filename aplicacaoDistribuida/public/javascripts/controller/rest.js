//Importe
var pedidoController = require('./pedidoController');

//Capitura do formulario e adicionando um evento
document.getElementById('pedidoForm').addEventListener('submit', function (event) {
  event.preventDefault();

  //Capiturando Valoroes informados no formulario
  const clienteNome = document.getElementById('clienteInput').value;
  const itemNome = document.getElementById('produtoInput').value;
  const itemPreco = parseFloat(document.getElementById('itemPrecoInput').value);
  const itemQuantidade = parseInt(document.getElementById('quantidadeInput').value);

  // Imprimir os valores no console
  console.log('Cliente:', clienteInput);
  console.log('Produto:', produtoInput);
  console.log('Preço:', itemPrecoInput);
  console.log('Quantidade:', quantidadeInput);
  //

  /* */
  const pedidoData = {
    clienteNome: clienteNome,
    clienteEndereco: clienteEndereco,
    itens: [{
      nome: itemNome,
      preco: itemPreco,
      quantidade: itemQuantidade
    }]
  };

  fetch('/javascripts/controller/pedidoController.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(pedidoData)
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
    document.getElementById('pedidoForm').reset();
  })
  .catch(error => {
    console.error('Erro:', error);
  });
});
