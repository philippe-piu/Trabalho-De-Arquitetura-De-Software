//pegando as informações do formulario e adicionando um evendo
document
  .getElementById('pedidoForm')
  .addEventListener('submit', function (event) {
    event.preventDefault()

    //Pegando as informações do formulario
    const clienteNome = document.getElementById('clienteNome').value
    const itemNome = document.getElementById('itemNome').value
    const itemPreco = parseFloat(document.getElementById('itemPreco').value)
    const itemQuantidade = parseInt(
      document.getElementById('itemQuantidade').value
    )

    //Mensagem no console para verificar em um teste se está pegando as informações do passadas do pelo formulario
    console.log('Cliente:', clienteNome)
    console.log('Produto:', itemNome)
    console.log('Preço:', itemPreco)
    console.log('Quantidade:', itemQuantidade)

    //cria um objeto que Capitura Informações do formulario e o armazena essas informações
    const pedidoData = {
      clienteNome: clienteNome,
      //Definindo um array com as informações do pedido
      itens: [{
        nome: itemNome,
        preco: itemPreco,
        quantidade: itemQuantidade
      }]
    };

    //API REST
    /*rever
    fetch('', {
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
*/
  });
