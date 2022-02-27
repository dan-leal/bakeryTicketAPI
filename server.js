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

const db = require('./app/models')
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connectado ao banco de dados MongoDB')
  })
  .catch(err => {
    console.log('Cannot connect to the database: ' + err.message)
    process.exit()
  })

// Rota Introdução
app.get('/', (req, res) => {
  res.json({ message: 'Bem vindo a API Comanda eletrônica.' })
})

// Defino a porta, fico na escuta para requisições
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`)
})
