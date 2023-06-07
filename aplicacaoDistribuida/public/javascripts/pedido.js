  class Pedido {
    constructor(cliente, numero) {
      this.cliente = cliente;
      this.numero = numero;
      this.itens = [];
    }
  }
  
  const pedidos = [];
  
  function armazenarPedido(cliente, numero) {
    const pedido = new Pedido(cliente, numero);
  
    // Armazena o pedido no array pedidos
    pedidos.push(pedido);
  
    // Retorna o objeto pedido criado
    return pedido;
  }
  