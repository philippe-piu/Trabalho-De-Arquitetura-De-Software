//Classe Item do Pedido
class ItemPedido {
  constructor(produto, quantidade) {
    this.produto = produto
    this.quantidade = quantidade
  }

  calcularTotal() {
    return this.produto.preco * this.quantidade;
  }
}

module.exports = ItemPedido
