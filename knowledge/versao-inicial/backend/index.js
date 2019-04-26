const app = require('express')() // para chamar express em apenas uma linha
const consign = require('consign') //  Gerencia as dependencias do backend
const db = require('./config/db')
const mongoose = require('mongoose')
require('./config/mongodb')

app.db = db // Recebe o knex configurado para o banco de dados correto
app.mongoose = mongoose

consign() // Funciona de forma serial, definindo o arquivo literalmente você garante sequencia nos carregamentos
    .then('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api/')
    .then('./schedule/')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Backend executando ...')
})