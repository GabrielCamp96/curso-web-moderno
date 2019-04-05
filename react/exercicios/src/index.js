import React from 'react'
import ReactDOM from 'react-dom'

// Aula 1 React
// const elemento = <h1>React</h1>
// // $('<h1>').html('React')

// Aula 2
// import Primeiro from './components/primeiro'

// Aula 3
// import BomDia from './components/BomDia'

// Aula 4
// import Multiplos from './components/Multiplos'
// ReactDOM.render(
//     <div>
//         <Multiplos.BoaTarde nome="Ana" />
//         <Multiplos.BoaNoite nome="Bia" />
//     </div>, document.getElementById('root'))

//Aula 5 e 6
// import Saudacao from './components/Saudacao'

// ReactDOM.render(
//     <div>
//         <Saudacao tipo="Bom dia" nome="João" />
//     </div>
// , document.getElementById('root'))

import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Augusto" sobrenome="Souza">
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
            <Filho nome="Jonas" />
        </Pai>
        <Pai nome="José" sobrenome="Pablo">
            <Filho nome="João" />
            <Filho nome="Augusto" />
            <Filho nome="Marta" />
            <Filho nome="Maria" />
        </Pai>
    </div>
, document.getElementById('root'))