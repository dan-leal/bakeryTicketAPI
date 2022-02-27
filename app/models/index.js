const dbConfig = require('../config/db.config.js')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {}
db.mongodb = mongoose
db.url = dbConfig.url
db.atendimento = require('./atendimento.model.js')(mongoose)
module.exports = db
