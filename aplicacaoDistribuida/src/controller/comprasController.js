function handleCompraFormSubmit() {
  const pedidoForm = document.getElementById('pedidoForm');

  pedidoForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Pega os valores do formulário
    const clienteId = document.getElementById('clienteId').value;
    const clienteNome = document.getElementById('clienteNome').value;
    const produtoId = document.getElementById('produtoId').value;
    const itemNome = document.getElementById('itemNome').value;
    const itemPreco = document.getElementById('itemPreco').value;
    const itemQuantidade = document.getElementById('itemQuantidade').value;

    // Cria um objeto com os itens passados pelo formulário
    const data = { clienteId, clienteNome, produtoId, itemNome, itemPreco, itemQuantidade };

    console.log('Dados do formulário:', data);

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
        } else {
          throw new Error('Erro ao realizar a compra');
        }
      })
      .catch(error => {
        alert('Erro ao realizar a compra: ' + error.message);
      });
  });
}

module.exports = {
  handleCompraFormSubmit,
};
