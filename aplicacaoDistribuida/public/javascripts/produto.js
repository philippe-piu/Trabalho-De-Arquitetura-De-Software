class Produto {
    constructor(nome, descricao, preco) {
      this.nome = nome;
      this.descricao = descricao;
      this.preco = preco;
    }
  }
  
  const produtos = [];
  
  function armazenarProduto(nome, descricao, preco) {
    const produto = new Produto(nome, descricao, preco);
  
    // Armazena o produto no array produtos
    produtos.push(produto);
  
    // Retorna o objeto produto criado
    return produto;
  }
  