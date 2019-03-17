const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anonimo\n')
    process.exit()
} else {
    process.stdout.write('Insira seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '') // Retirar o enter da entrada
        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}