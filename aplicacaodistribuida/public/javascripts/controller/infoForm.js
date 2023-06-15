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

    //Mensagem no console para verificar em um teste se está pegando as informações do passadas do oformulario
    console.log('Cliente:', clienteNome)
    console.log('Produto:', itemNome)
    console.log('Preço:', itemPreco)
    console.log('Quantidade:', itemQuantidade)
  });
