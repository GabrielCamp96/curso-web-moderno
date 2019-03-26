const bodyParser = require('body-parser')
const express = require('express')
const multer = require('multer')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true })) // le dados de formulario e transforma em objeto
app.use(bodyParser.json()) // transforma json em objeto

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('./upload', (req, res) => {
    upload((req, res, err) => {
        if(err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso')
    })
})


app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    // formas de receber dados no backend
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send ({
        resultado: par? 'par' : 'impar'
    })
})

app.get('/teste', (req, res) => { res.send('Ok') })
app.listen(8080, () => console.log('Executando ...'))