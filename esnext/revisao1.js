// let e const

{
    var a = 2
    let b = 3
    console.log(b) // escopo de bloco
}
console.log(a) // não tem escopo de bloco

// Template String

const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring

const [l, e, ...tras] = "Cod3r"
console.log(l,e,tras)

const [x,y] = [1,2,3]
const [w, ,z] = [1,2,3]
console.log(x, y)
console.log(w, z)

const {idade: i, nome} = {nome: "Ana", idade: 9}
console.log(i, nome)