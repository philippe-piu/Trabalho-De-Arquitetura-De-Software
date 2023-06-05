//Cliente
class Cliente {
  constructor(nome, endereco, telefone) {
    this.nome = nome;
    this.endereco = endereco;
    this.telefone = telefone;
  }
}

// Produto
class Produto {
  constructor(nome, descricao, preco) {
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
  }
}

//ItemPedido
class ItemPedido {
  constructor(produto, quantidade) {
    this.produto = produto;
    this.quantidade = quantidade;
  }
}

// Pedido
class Pedido {
  constructor(cliente, numero, data, status) {
    this.cliente = cliente;
    this.numero = numero;
    this.data = data;
    this.status = status;
    this.itens = [];
  }
}