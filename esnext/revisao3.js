// ES8: Object.values/Object.entries

const pessoa = {
    nome: 'Jose',
    idade: 12
}

console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

const nome = 'Carla'
const humano = {
    nome,
    ola() {
        console.log(`Olá! Meu nome é ${nome}!`)
    }
}
console.log(humano.nome)
humano.ola()

// Class

class Animal {}
class Cachorro extends Animal {
    falar () {
        return 'Au au'
    }
}

console.log(new Cachorro().falar())