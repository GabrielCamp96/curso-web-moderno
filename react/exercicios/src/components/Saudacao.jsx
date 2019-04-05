import React, { Component } from 'react'

export default class Saudacao extends Component {
    // Duas soluções para vincular os states ao objeto
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props){
        super(props)
        this.setTipo = this.setTipo.bind(this)
    }

    setTipo(e) {
        this.setState({
            tipo: e.target.value //tipo: "blabla"
        })
    }

    setNome(e) {
        this.setState({nome: e.target.value})
    }
    render(){
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr/>
                {/* this é necessário pois onChange se refere apenas ao objeto */}
                <input type="text" placeholder="Tipo..." 
                    value={tipo} onChange={this.setTipo}/>
                <input type="text" placeholder="Nome..." 
                value={nome} onChange={e => this.setNome(e)}/>
            </div>
        )
    }
}