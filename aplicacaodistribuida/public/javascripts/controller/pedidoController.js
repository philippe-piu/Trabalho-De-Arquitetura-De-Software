//Importes
const Pedido = require('../model/pedido');
const Cliente = require('../model/cliente');
const ItemPedido = require('../model/itemPedido');
const Produto = require('../model/produto');

// Função para criar um novo pedido
function criarPedido(req, res) {
  // Dados do pedido enviados pelo formulario
  const { clienteNome, itens } = req.body;

  // Criando o objeto Cliente
  const cliente = new Cliente(clienteNome, clienteEndereco);

  // Criando os objetos ItemPedido
  const itensPedido = itens.map(item => {
    const produto = new Produto(item.nome, item.preco);
    return new ItemPedido(produto, item.quantidade);
  });

  // Criando  objeto Pedido
  const pedido = new Pedido(cliente, itensPedido);

  // fazer a logica de salvamento

  // Retornar uma resposta de sucesso ao cliente
  res.status(201).json({ message: 'Pedido criado com sucesso!' });
}

module.exports = criarPedido;