const mongoose = require('mongoose')

const StonksSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  quantidade: {
    type: Number,
    required: true,
    min: 1,
  },
  data_compra: {
    type: Date,
    default: Date.now,
  },
  valor: {
    type: Number,
    required: true,
  },
  corretora: {
    type: String,
  },
})

module.exports = Stonks = mongoose.model('stonks', StonksSchema)
