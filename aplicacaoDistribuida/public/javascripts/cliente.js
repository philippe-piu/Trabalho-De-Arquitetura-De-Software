class Cliente {
    constructor(nome, endereco, telefone) {
      this.nome = nome;
      this.endereco = endereco;
      this.telefone = telefone;
    }
  }
  
  const clientes = [];
  
  function armazenarCliente(nome, endereco, telefone) {
    const cliente = new Cliente(nome, endereco, telefone);
  
    // Armazena o cliente no array clientes
    clientes.push(cliente);
  
    // Retorna o objeto cliente criado
    return cliente;
  }
  