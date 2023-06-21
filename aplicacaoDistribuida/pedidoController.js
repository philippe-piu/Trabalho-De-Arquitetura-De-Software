// Importações
const Pedido = require('./src/model/pedido')
const Cliente = require('./src/model/cliente.js')
const ItemPedido = require('./src/model/itemPedido.js')
const Produto = require('./src/model/produto.js')

// Armazenamento de pedidos temporário
let pedidos = []

class PedidoController {
  // Retorna todos os pedidos
  static getAllPedidos() {
    return pedidos
  }
  // Cria um novo pedido
  static createPedido(req, res) {
    const {
      clienteId,
      clienteNome,
      produtoId,
      itemNome,
      itemPreco,
      itemQuantidade
    } = req.body

    // Verifica se o cliente e o produto existem
    const cliente = new Cliente(clienteId, clienteNome)
    const produto = new Produto(produtoId, itemNome, itemPreco)

    const itemPedido = new ItemPedido(produto, itemQuantidade)
    const pedido = new Pedido(pedidos.length + 1, cliente, [itemPedido])

    pedidos.push(pedido)

    console.log('Novo pedido:', pedido)

    res.redirect(`/pedidoDetalhe/${pedido.id}`)
  }

  // Atualiza um pedido existente
  static updatePedido(req, res) {
    const { pedidoId } = req.params
    const {
      clienteId,
      clienteNome,
      produtoId,
      itemNome,
      itemPreco,
      quantidade
    } = req.body

    const pedido = pedidos.find(p => p.id === parseInt(pedidoId))

    if (!pedido) {
      res.status(404).json({ message: 'Pedido não encontrado' })
      return
    }

    // Verifica se o cliente e o produto existem
    const cliente = new Cliente(clienteId, clienteNome)
    const produto = new Produto(produtoId, itemNome, itemPreco)

    const itemPedido = new ItemPedido(produto, quantidade)
    pedido.cliente = cliente
    pedido.itens = [itemPedido]

    res.json(pedido)
  }

  // Excluir um pedido existente
  static deletePedido(req, res) {
    const { pedidoId } = req.params

    // Verifica se o pedido existe
    const pedidoIndex = pedidos.findIndex(p => p.id === parseInt(pedidoId))
    if (pedidoIndex === -1) {
      res.status(404).json({ message: 'Pedido não encontrado' })
      return
    }

    // Remove o pedido do array de pedidos
    pedidos.splice(pedidoIndex, 1)

    console.log('Pedido excluído:', pedidoId)

    res.sendStatus(204)
  }
}

module.exports = PedidoController
