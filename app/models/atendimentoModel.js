const mongoose = require('mongoose')
const { DateTime } = require('luxon')
const Schema = mongoose.Schema

// Classe comanda
const comandaSchema = new Schema({
	numComanda: {
		type: Number // YYYY+(4 dígitos aleatórios)
	},
	dataCompra: { type: Date },
	consumidos: [
		{
			quantidadePorProduto: { type: Number },
			nomeDoProduto: { type: String }
		}
	]
})

module.exports = mongoose.model('comanda', comandaSchema)

// Classe Produtos
const produtosSchema = new Schema({
	valorDoProduto: mongoose.Decimal128,
	nomeDoProduto: String
})

module.exports = mongoose.model('produto', produtosSchema)
