function handleDetalhePage() {
  const pedidoId = window.location.href.split('/').pop();

  // Faz uma requisição GET para o servidor para buscar o pedido feito
  fetch(`/pedidos/${pedidoId}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Erro ao carregar o detalhe do pedido');
      }
    })
    .then(pedido => {
      // Preencha os campos no template com os dados do pedido
      document.getElementById('clienteId').textContent = pedido.cliente.id;
      document.getElementById('clienteNome').textContent = pedido.cliente.nome;

      let itensHtml = '';
      pedido.itens.forEach(function (item) {
        itensHtml += `<li>${item.produto.nome} - Quantidade: ${item.quantidade}</li>`;
      });
      document.getElementById('itens').innerHTML = itensHtml;

      document.getElementById('total').textContent = pedido.total;

      document.getElementById('editarBtn').addEventListener('click', function () {
        window.location.href = `/pedidos/${pedido.id}/editar`;
      });

      document.getElementById('excluirBtn').addEventListener('click', function () {
        if (confirm('Tem certeza de que deseja excluir este pedido?')) {
          // Faz uma requisição DELETE para o servidor
          fetch(`/pedidos/${pedido.id}`, { method: 'DELETE' })
            .then(response => {
              if (response.ok) {
                alert('Pedido excluído com sucesso');
                window.location.href = '/pedidos';
              } else {
                throw new Error('Erro ao excluir o pedido');
              }
            })
            .catch(error => {
              alert('Erro ao excluir o pedido: ' + error.message);
            });
        }
      });
    })
    .catch(error => {
      alert('Erro ao carregar o detalhe do pedido: ' + error.message);
    });
}

module.exports = {
  handleDetalhePage,
};
