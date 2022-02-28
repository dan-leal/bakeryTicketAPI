// Importo o express e suas dependências para uso web

const express = require('express')
const cors = require('cors')
const app = express()

// defino a rota de acesso da API
var corsOptions = {
	origin: 'http://localhost:8081'
}
app.use(cors(corsOptions))

// para aceitar requisições com content-type - application/json
app.use(express.json())

// para aceitar requisições com content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

const mongoose = require('mongoose')

mongoose.Promise = global.Promise
const url = require('./app/config/db.config').url

mongoose.connect(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

mongoose.connection.once('open', _ => {
	console.log('Conectado ao banco de dados da Padaria')
})

mongoose.connection.on('error', err => {
	console.error(`❌ Erro na conexão ao banco de dados: ${err.message}`)
})

// Importar models pro mongoose
require('./app/models/atendimentoModel')

// Habilidando rotas de acesso
const routes = require('./app/routes/routes')

// Importo todas as rotas definidas nos controllers
app.use('/', routes)

// Defino a porta, fico na escuta para requisições
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
	console.log(`Servidor está rodando na porta ${PORT}`)
})
