const porta = 3003

const bodyParser = require('body-parser')
const express = require('express')
const bancoDeDados = require('./bancoDeDados')
const app = express()

// Middleware será executado sempre, já que não tem url específica.

app.use(bodyParser.urlencoded({ extended: true }))

// Exemplo de passagem em Middleware
/* app.get('/produtos', (req,res,next) => {
    console.log('Middleware 1 ...')
    next()
}) */ 

app.get('/produtos', (req,res) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req,res) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req,res) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produtos/:id', (req,res) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
        id: req.params.id
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req,res) => {
    const produto = bancoDeDados.deleteProduto(req.params.id)
    res.send(produto) // JSON
})
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})