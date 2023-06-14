//Classe Pedido
class Pedido {
  constructor(cliente) {
    this.cliente = cliente;
    this.itens = [];
  }
}

module.exports = Pedido;