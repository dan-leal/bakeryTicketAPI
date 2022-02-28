const mongoose = require('mongoose')
const { DateTime } = require('luxon')

// exportar os modelos
const Comandas = mongoose.model('comanda')
const Produtos = mongoose.model('produto')

exports.Index = async (req, res) => {
	res.send('Servidor Online')
}

// lista comandas
exports.listaComandas = async (req, res) => {
	try {
		let encontrados = await Comandas.find({}, { _id: 0 })
		let total = await Comandas.find({}).count()
		res
			.status(200)
			.json({ message: `${total} comandas cadastradas`, encontrados })
	} catch (e) {
		res.status(500).json({ message: e.message })
	}
}

// Se foi a primeira vez consumindo, gera comanda. Após isso, insere o produto na comanda.
exports.insereProduto = async (req, res) => {
	const { dataCompra, produto, quantidade, comanda } = req.body

	try {
		if (comanda) {
			// console.log(comanda)
			// console.log(produto, quantidade)
			let registro = await Comandas.updateOne(
				{ numComanda: comanda }, // busca a comanda
				{
					// executa a adição
					$push: {
						consumidos: {
							quantidadePorProduto: quantidade,
							nomeDoProduto: produto
						}
					}
				}
			)

			res.status(200).json({ message: 'Incluso na comanda:', registro })
		} else {
			// console.log(dataCompra, produto, quantidade)
			// console.log('não tem comanda')
			let registro = await Comandas.create({
				numComanda:
					DateTime.now().toFormat('yyyy') +
					Math.floor(1000 + Math.random() * 9000),
				dataCompra: dataCompra,
				consumidos: [
					{ quantidadePorProduto: quantidade, nomeDoProduto: produto }
				]
			})
			res.status(200).json({ message: 'Comanda criada:', registro })
		}
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

// cadastra produto
exports.cadastraProduto = async (req, res) => {
	try {
		let produzido = await Produtos.create({
			nomeDoProduto: req.body.nomeDoProduto,
			valorDoProduto: req.body.valorDoProduto
		})

		res.status(200).json({ message: 'Produto cadastrado:', produzido })
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

exports.listaProdutos = async (req, res) => {
	try {
		let encontrados = await Produtos.find({}, { _id: 0, __v: 0 })
		let total = await Produtos.find({}).count()
		res.status(200).json({ message: `${total} Produtos`, encontrados })
	} catch (e) {
		res.status(500).json({ message: e.message })
	}
}
