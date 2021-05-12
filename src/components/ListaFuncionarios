import React, { Component } from 'react'


export class ListaFuncionario extends Component {
    static displayName = "Funcionarios";

    constructor() {
        super();
        this.state = { funcionarios: [], loading: true}
    }

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
            fetch('api/funcionarios/' + id, {method : 'delete'})
                .then(json => {
                    window.location.href = "fetch=funcionario";
                    alert('Deletado com sucesso!');
                })
        }
    }

    static renderFuncionariosTabela(funcionarios) {
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
}
