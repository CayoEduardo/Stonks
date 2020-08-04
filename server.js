const express = require('express')
const app = express()
const port = process.env.port || 3000
const connectDB = require('./config/db')
const Stonk = require('./models/Stonks')

connectDB()

app.use(express.json({ extended: false }))

app.post('/', async (req, res) => {
  const { nome, quantidade, data_compra, valor, corretora } = req.body

  let stonk = new Stonk({
    nome,
    quantidade,
    data_compra,
    valor,
    corretora,
  })

  await stonk.save()

  console.log(stonk)
  res.send('Stonk registered successfuly!')
})

app.get('/', async (req, res) => {
  let stonks = await Stonk.find({})
  console.log('Stonks: ')
  console.log(stonks)
  res.send('Got stonks')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
