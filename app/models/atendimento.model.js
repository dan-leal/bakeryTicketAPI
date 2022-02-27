const mongoose = require('mongoose')
const { DateTime } = require('luxon')

const AtendimentoSchema = new Schema({
  dataCompra: { type: Date, default: DateTime.now() },
  valor: { type: Number, default: 0 },
  produtos: [
    {
      item: { type: String },
      quantidade: { type: Number, default: 0 }
    }
  ]
})
