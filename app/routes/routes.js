const express = require('express')
const router = express.Router()

const controller = require('../controllers/controller')

// verificar status de servidor
router.get('/', controller.Index)

// cadastra o produto
router.post('/produtos', controller.cadastraProduto)

// verifica os produtos
router.get('/produtos', controller.listaProdutos)

// verifica as comandas
router.get('/comandas', controller.listaComandas)

// gera comanda após consumo
router.post('/comandas', controller.insereProduto)

module.exports = router
