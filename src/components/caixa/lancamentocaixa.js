import React, { Component } from 'react'

export class ListaCaixalancamento extends Component {
    static displayName = "Lancamentos de Caixa";

    constructor() {
        super();
        this.state = { caixalancamentos: [], loading: true}
    }

//    alert()

    componentDidMount() {
        this.populaCaixalancamentoData();
    }

    static handleEdit(id) {
        window.location.href = "/caixalancamento/edit/" + id;
    }

    static handleDelete(id) {
        if (!window.confirm("Deseja deletar caixa :" + id)) {
            return;
        }
        else {
            fetch('apiCaixalancamento' + id, {method : 'delete'})
                .then(json => {
                    window.location.href = "fetch=caixalancamento";
                    alert('Deletado com sucesso!');
                })
        }
    }

    static renderCaixalancamentosTabela(caixalancamentos) {
        
        alert('estou aqui')
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
              <thead>
                    <tr>
                        <th>Código</th>
                        <th>Data do Lancamento</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {caixalancamentos.map(caixalancamento =>
                        <tr key={caixalancamento.id}>
                            <td> {caixalancamento.id} </td>
                            <td>{caixalancamento.datahora} </td>

                            <td>
                                <button className="btn btn-success" onClick={(id) => this.handleEdit(caixalancamento.id)}>Edit</button> &nbsp;
                                <button className="btn btn-danger" onClick={(id) => this.handleDelete(caixalancamento.id)}>Delete</button>
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
        : ListaCaixalancamento.renderCaixalancamentosTabela(this.state.caixalancamentos);

        return(
            <div>
                <h1 id="tabelLabel" >Lancamentos de Caixa</h1>
                <p>Tela de Listagem de Lancamentos de Caixa</p>
                {contents}
            </div>
        );
    }

    async populaCaixalancamentoData() {
        const response = await fetch('https://localhost:44331/api/caixalancamentoes');
        const data = await response.json();
        this.setState({caixalancamentos : data, loading: false});
    }
}
