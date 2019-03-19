const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req,resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns</h1>')
})

app.listen(3003)
