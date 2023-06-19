// importação da biblioteca jQuery
const $ = require('jquery');

// Remova o document.ready e substitua por uma função exportada
function handleCompraFormSubmit() {
  $('#pedidoForm').submit(function (event) {
    event.preventDefault();

    // Pega os Valores do formulário
    const clienteId = $('#clienteId').val();
    const clienteNome = $('#clienteNome').val();
    const produtoId = $('#produtoId').val();
    const itemNome = $('#itemNome').val();
    const itemPreco = $('#itemPreco').val();
    const quantidade = $('#itemQuantidade').val();

    // Cria um objeto com os itens passados pelo formulário
    const data = { clienteId, clienteNome, produtoId, itemNome, itemPreco, quantidade };

    // Envie a requisição para o servidor
    $.ajax({
      type: 'POST',
      url: '/pedidos',
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: function (response) {
        alert('Compra realizada com sucesso');
        window.location.replace('/pedidos/' + response.id);
      },
      error: function (error) {
        alert('Erro ao realizar a compra: ' + error.responseJSON.message);
      },
    });
  });
}

module.exports = {
  handleCompraFormSubmit,
};
