function handleCompraFormSubmit() {
  //Capituro a referencioa do formulario preenchido
  const pedidoForm = document.getElementById('pedidoForm');

  //Criu um evento para o formulario
  pedidoForm.addEventListener('submit', function (event) {
    //Permite eu fazer um evento do meu jeito
    event.preventDefault();

    // Pega os valores passados no formulário
    const clienteId = document.getElementById('clienteId').value;
    const clienteNome = document.getElementById('clienteNome').value;
    const produtoId = document.getElementById('produtoId').value;
    const itemNome = document.getElementById('itemNome').value;
    const itemPreco = document.getElementById('itemPreco').value;
    const itemQuantidade = document.getElementById('itemQuantidade').value;

    // Cria um objeto com os itens passados pelo formulário
    const data = {
      cliente: {
        id: clienteId,
        nome: clienteNome
      },
      itens: [
        {
          produto: {
            id: produtoId,
            nome: itemNome,
            preco: itemPreco
          },
          quantidade: itemQuantidade
        }
      ]
    };

    // Configuração da requisição
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    // Envie a requisição para o servidor
    fetch('/pedidos', requestOptions)
  .then(response => {
    if (response.ok) {
      const mensagem = 'Compra realizada com sucesso';
      const successMessage = document.createElement('div');
      successMessage.classList.add('success-message');
      successMessage.textContent = mensagem;
      pedidoForm.innerHTML = '';
      pedidoForm.appendChild(successMessage);

      window.location.href = '/pedidoDetalhe';
    } else {
      //Se ocorre algum erro no preenchimento do formulario
      throw new Error('Erro ao realizar a compra');
    }
  })
  .catch(error => {
    //Erros durante a requisição
    alert('Erro ao realizar a compra: ' + error.message);
  });
}

handleCompraFormSubmit();
