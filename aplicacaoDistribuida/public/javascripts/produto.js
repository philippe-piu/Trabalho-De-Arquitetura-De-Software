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
  
  // Exemplo de uso da função
  const produto1 = armazenarProduto('Produto A', 'Descrição do Produto A', 10.99);
  console.log(produto1);
  
  const produto2 = armazenarProduto('Produto B', 'Descrição do Produto B', 19.99);
  console.log(produto2);
  console.log(produtos);
  