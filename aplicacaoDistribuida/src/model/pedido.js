//Classe Pedido
class Pedido {
  constructor(id, cliente, itens) {
    this.id = id;
    this.cliente = cliente;
    this.itens = itens;
  }

  calcularTotal() {
    let total = 0;
    this.itens.forEach((item) => {
      total += item.calcularTotal();
    });
    return total;
  }
}

module.exports = Pedido;
