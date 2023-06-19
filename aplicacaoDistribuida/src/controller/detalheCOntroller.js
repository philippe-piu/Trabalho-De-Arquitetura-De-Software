// importação da biblioteca jQuery
const $ = require('jquery');

// Remova o document.ready e substitua por uma função exportada
function handleDetalhePage() {
  const pedidoId = window.location.pathname.split('/').pop();

  $.ajax({
    type: 'GET',
    url: '/pedidos/' + pedidoId,
    success: function (response) {
      $('#pedidoId').text(response.id);
      $('#cliente').text(response.cliente.nome);

      let produtosHtml = '';
      response.itens.forEach(function (item) {
        produtosHtml += '<li>' + item.produto.nome + ' - Quantidade: ' + item.quantidade + '</li>';
      });
      $('#produtos').html(produtosHtml);

      $('#total').text(response.total);

      // Adicione os manipuladores de eventos corretamente
      $('#editarBtn').click(function () {
        window.location.href = '/pedidos/' + pedidoId + '/editar';
      });

      $('#excluirBtn').click(function () {
        if (confirm('Tem certeza de que deseja excluir este pedido?')) {
          $.ajax({
            type: 'DELETE',
            url: '/pedidos/' + pedidoId,
            success: function () {
              alert('Pedido excluído com sucesso');
              window.location.href = '/pedidos';
            },
            error: function (error) {
              alert('Erro ao excluir o pedido: ' + error.responseJSON.message);
            },
          });
        }
      });
    },
    error: function (error) {
      alert('Erro ao carregar o pedido: ' + error.responseJSON.message);
    },
  });
}

module.exports = {
  handleDetalhePage,
};
