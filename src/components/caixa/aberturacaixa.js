import React, { Component } from 'react'

export class ListaCaixacontrole extends Component {
    static displayName = "Controles de Caixas";

    constructor() {
        super();
        this.state = { caixacontroles: [], loading: true}
    }

//    alert()

    componentDidMount() {
        this.populaCaixacontroleData();
    }

    static handleEdit(id) {
        window.location.href = "/caixacontrole/edit/" + id;
    }

    static handleDelete(id) {
        if (!window.confirm("Deseja deletar caixa :" + id)) {
            return;
        }
        else {
            fetch('apiCaixacontrole' + id, {method : 'delete'})
                .then(json => {
                    window.location.href = "fetch=caixacontrole";
                    alert('Deletado com sucesso!');
                })
        }
    }

    static renderCaixacontrolesTabela(caixacontroles) {
        
        alert('estou aqui')
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
              <thead>
                    <tr>
                        <th>Código</th>
                        <th>Data de Abertura</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {caixacontroles.map(caixacontrole =>
                        <tr key={caixacontrole.id}>
                            <td> {caixacontrole.id} </td>
                            <td>{caixacontrole.datahoraabertura} </td>

                            <td>
                                <button className="btn btn-success" onClick={(id) => this.handleEdit(caixacontrole.id)}>Edit</button> &nbsp;
                                <button className="btn btn-danger" onClick={(id) => this.handleDelete(caixacontrole.id)}>Delete</button>
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
        : ListaCaixacontrole.renderCaixacontrolesTabela(this.state.caixacontroles);

        return(
            <div>
                <h1 id="tabelLabel" >Controle de Caixas</h1>
                <p>Tela de Listagem de Controle de Caixas</p>
                {contents}
            </div>
        );
    }

    async populaCaixacontroleData() {
        const response = await fetch('https://localhost:44331/api/caixacontroles');
        const data = await response.json();
        this.setState({caixacontroles : data, loading: false});
    }
}
