// com promise...

const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => resultado += dados)

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}
/*
let nomes = []
getTurma('A').then( alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then( alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C').then( alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
}) */

// Recurso do ES8
// Objetivo de simplificar o uso de promisses...
let obterAlunos = async () => {
    let turmaA = await getTurma('A')
    let turmaB = await getTurma('B')
    let turmaC = await getTurma('C')
    turmaA = [].concat(turmaA).map(aluno => `A: ${aluno.nome}`)
    turmaB = [].concat(turmaB).map(aluno => `B: ${aluno.nome}`)
    turmaC = [].concat(turmaC).map(aluno => `C: ${aluno.nome}`)
    return [].concat(turmaA,turmaB,turmaC)
}

obterAlunos().then(nomes => console.log(nomes))