const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsista?

// Desafio 2: Algum aluno é bolsista?

const allBolsista = alunos.map(aluno => aluno.bolsista).reduce(
    (resp=true, bolsista) => resp && bolsista)

const atLeastOneBolsista = alunos.map(aluno => aluno.bolsista).reduce(
    (resp=false, bolsista) => resp || bolsista)

console.log(allBolsista)
console.log(atLeastOneBolsista)