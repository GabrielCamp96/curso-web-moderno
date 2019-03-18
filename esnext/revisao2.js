// Arrow Function

const soma = (a,b) => a+b
console.log(soma(2,3))

// Arrow Function (this)

const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({}) // mesmo apontando para outro contexto (nesse caso objeto), 
                                // o this não muda
lexico1()
lexico2()

// parametros default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais forte!')

// operador rest

const total = (...numeros) => {
    // total = 0
    // return numeros.forEach(n => total += n)
    const soma = numeros.reduce((somatorio, numero) => somatorio += numero)
    return soma
}

console.log(total(2,3,4,5,6))