// Array para armazenar os pedidos
let pedidos = [];

// Função para criar um novo pedido
function criarPedido(cliente, produto, quantidade) {
  const pedido = {
    id: pedidos.length + 1,
    cliente: cliente,
    produto: produto,
    quantidade: quantidade
  };

  pedidos.push(pedido);

  return pedido;
}

// Função para exibir os pedidos na lista
function exibirPedidos() {
  const pedidosList = document.getElementById('pedidosList');

  // Limpa a lista antes de exibir os pedidos
  pedidosList.innerHTML = '';

  // Itera sobre todos os pedidos e os adiciona à lista
  pedidos.forEach((pedido) => {
    const listItem = document.createElement('li');
    listItem.innerText = `Pedido ${pedido.id}: Cliente ${pedido.cliente}, Produto ${pedido.produto}, Quantidade ${pedido.quantidade}`;
    pedidosList.appendChild(listItem);
  });
}

// Função para lidar com o envio do formulário de criação de pedido
function handlePedidoFormSubmit(event) {
  event.preventDefault();

  // Obtém os valores dos campos do formulário
  const clienteInput = document.getElementById('clienteInput');
  const produtoInput = document.getElementById('produtoInput');
  const quantidadeInput = document.getElementById('quantidadeInput');

  const cliente = clienteInput.value;
  const produto = produtoInput.value;
  const quantidade = parseInt(quantidadeInput.value);

  // Cria um novo pedido
  const novoPedido = criarPedido(cliente, produto, quantidade);

  // Limpa os campos do formulário
  clienteInput.value = '';
  produtoInput.value = '';
  quantidadeInput.value = '';

  // Atualiza a exibição dos pedidos
  exibirPedidos();
}

// Adiciona o evento de envio do formulário
const pedidoForm = document.getElementById('pedidoForm');
pedidoForm.addEventListener('submit', handlePedidoFormSubmit);

// Inicializa a exibição dos pedidos
exibirPedidos();
