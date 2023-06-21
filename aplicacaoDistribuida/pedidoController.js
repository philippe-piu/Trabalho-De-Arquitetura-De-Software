// Importações
const Pedido = require('./src/model/pedido')
const Cliente = require('./src/model/cliente.js')
const ItemPedido = require('./src/model/itemPedido.js')
const Produto = require('./src/model/produto.js')

// Armazenamento de pedidos temporário
let pedidos = []

function verificarExistenciaCliente(clienteId, clienteNome) {
  // Verifica se o cliente existe
  return new Cliente(clienteId, clienteNome)
}

function verificarExistenciaProduto(produtoId, itemNome, itemPreco) {
  // Verifica se o produto existe
  return new Produto(produtoId, itemNome, itemPreco)
}

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
    const cliente = verificarExistenciaCliente(clienteId, clienteNome)
    const produto = verificarExistenciaProduto(produtoId, itemNome, itemPreco)

    const itemPedido = new ItemPedido(produto, itemQuantidade)
    const pedido = new Pedido(pedidos.length + 1, cliente, [itemPedido])

    pedidos.push(pedido)

    //Pequena verificação para ver se os pedidos foram criados pelo o console
    console.log('Novo pedido:', pedido)

    //Redirecionado para pagina pedidoDetalhe
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
    const cliente = verificarExistenciaCliente(clienteId, clienteNome)
    const produto = verificarExistenciaProduto(produtoId, itemNome, itemPreco)

    const itemPedido = new ItemPedido(produto, quantidade)
    pedido.cliente = cliente
    pedido.itens = [itemPedido]

    res.json(pedido)
  }

  // Excluir um pedido existente
  static deletePedido(req, res) {
    const { pedidoId } = req.params

    // Verifica se o pedido existe pelo ID
    if (!pedido) {
      res.status(404).json({ message: 'Pedido não encontrado' })
      return
    }

    // Remove o pedido do array de pedidos
    pedidos.splice(pedidoIndex, 1)

    //Mensagem no console para verificar se o pedido foi excluido
    console.log('Pedido excluído:', pedidoId)

    res.sendStatus(204)
  }
}

module.exports = PedidoController
