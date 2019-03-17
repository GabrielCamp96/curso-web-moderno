const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    query = funcionarios.filter(
        funcionario => funcionario.genero == "F" && funcionario.pais == "China"
    ).reduce((resp, func) => resp.salario < func.salario? resp : func)
    console.log(query)
})