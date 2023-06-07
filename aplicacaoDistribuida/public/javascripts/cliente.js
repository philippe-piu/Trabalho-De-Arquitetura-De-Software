class Cliente {
    constructor(nome, endereco, telefone) {
      this.nome = nome;
      this.endereco = endereco;
      this.telefone = telefone;
      this.cidade = cidade;
    }
  }
  
  const clientes = [];
  
  function armazenarCliente(nome, endereco, telefone,cidade) {
    const cliente = new Cliente(nome, endereco, telefone, cidade);
  
    // Armazena o cliente no array clientes
    clientes.push(cliente);
  
    // Retorna o objeto cliente criado
    return cliente;
  }
  