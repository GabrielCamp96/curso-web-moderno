// operador rest(juntar) ou spread (espalhar)
// usar rest como parametro de função

const funcionario = { nome: 'Maria', salario: 12345.67}
const clone = { ativo: true, ...funcionario }

console.log(clone)

// usar spread com array
const grupoA = ['Joao', 'Maria', 'Luisa', 'Jonas']
const grupoFinal = ['Pedro', ...grupoA, 'Rafaela']

console.log(grupoFinal)