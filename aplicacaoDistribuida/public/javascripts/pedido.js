class Pedido {
    constructor(cliente, numero, data, status) {
      this.cliente = cliente;
      this.numero = numero;
      this.data = data;
      this.status = status;
      this.itens = [];
    }
  }