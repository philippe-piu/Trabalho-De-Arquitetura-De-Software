//Importes
const Pedido = require('../model/pedido')
const Cliente = require('../model/cliente')
const ItemPedido = require('../model/itemPedido')
const Produto = require('../model/produto')

// Função de criação de pedido
const criarPedido = (req, res) => {
  //Capiturando dados do formulario
  const { clienteInput } = req.body

  //Criação do objeto cliente
  const cliente = new Cliente(clienteInput)

  //Criação dos objetos ItemPedidos
  const itensPedido = itens.map(item => {
    const produto = new Produto(item.nome, item.preco)
    return new ItemPedido(produto, item.quantidade)
  })

  //Criando Objeto Pedido
  const pedido = new Pedido(cliente, itensPedido)

  // Retornar uma resposta de sucesso ao cliente
  res.status(201).json({ message: 'Pedido criado com sucesso!' })
}

// Exportar função de criação de pedido
module.exports = criarPedido;
