class ItemPedido {
    constructor(produto, quantidade) {
      this.produto = produto;
      this.quantidade = quantidade;
    }
  }
  
  const itensPedidos = [];
  
  function armazenarItemPedido(produto, quantidade) {
    const itemPedido = new ItemPedido(produto, quantidade);
  
    // Armazena o item de pedido no array itensPedidos
    itensPedidos.push(itemPedido);
  
    // Retorna o objeto item de pedido criado
    return itemPedido;
  }
  