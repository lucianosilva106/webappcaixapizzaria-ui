import React, { Component } from 'react'
//import axios from 'axios';
//import { apiFuncionario } from './apifuncionario';

export class ListaFuncionario extends Component {
    static displayName = "Lista de Funcionarios";

    constructor() {
        super();
        this.state = { funcionarios: [], loading: true}
    }

//    alert()

    componentDidMount() {
        this.populaFuncionarioData();
    }

    static handleEdit(id) {
        window.location.href = "/funcionario/edit/" + id;
    }

    static handleDelete(id) {
        if (!window.confirm("Deseja deletar funcionario :" + id)) {
            return;
        }
        else {
            fetch('apiFuncionario' + id, {method : 'delete'})
                .then(json => {
                    window.location.href = "fetch=funcionario";
                    alert('Deletado com sucesso!');
                })
        }
    }

    static renderFuncionariosTabela(funcionarios) {
        
        alert('estou aqui')
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
              <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {funcionarios.map(funcionario =>
                        <tr key={funcionario.id}>
                            <td> {funcionario.id} </td>
                            <td>{funcionario.fun_nome} </td>

                            <td>
                                <button className="btn btn-success" onClick={(id) => this.handleEdit(funcionario.id)}>Edit</button> &nbsp;
                                <button className="btn btn-danger" onClick={(id) => this.handleDelete(funcionario.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render () {
        let contents = this.state.loading
        ? <p><em>Carregando...</em></p>
        : ListaFuncionario.renderFuncionariosTabela(this.state.funcionarios);

        return(
            <div>
                <h1 id="tabelLabel" >Funcionarios</h1>
                <p>Tela de Listagem de Funcionarios</p>
                {contents}
            </div>
        );
    }

    async populaFuncionarioData() {
        const response = await fetch('https://localhost:44331/api/funcionarios');
        const data = await response.json();
        this.setState({funcionarios : data, loading: false});
    }
}
