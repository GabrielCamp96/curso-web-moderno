const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// Síncrono

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Assincrono

fs.readFile(caminho, 'utf-8', (err,conteudo) => {
    const config = JSON.parse(conteudo)
    if(err === null && typeof config == 'object')
        console.log(`${config.db.host}:${config.db.port}`) 
})

const config = require('./arquivo.json')
console.log(config.db) // Executa antes porque a função callback assincrona retornou
                        // depois do require que foi uma chamada síncrona

fs.readdir(__dirname, (err, arquivos) => {
    if(err === null && typeof arquivos == 'array')
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})
