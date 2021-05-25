import React, { Component } from 'react'
import URL_API from '../../service/service-api';

export class ListaCaixa extends Component {
    static displayName = "Lista de Lançamentos de Caixa";

    constructor() {
        super();
        this.state = { caixalancamentos: [], loading: true}
    }

    componentDidMount() {
        this.populaCaixaLancamentoData();
    }

    static handleDelete(id) {
        if (!window.confirm("Deseja deletar lançamento :" + id)) {
            return;
        }
        else {
            fetch(URL_API + '/api/caixalancamentoes' + id, {method : 'delete'})
                .then(json => {
                    alert('Deletado com sucesso!');
                })
        }
    }

    static renderCaixaLancamentoTabela(caixalancamentos) {
        
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
              <thead>
                    <tr>
                        <th>Código</th>
                        <th>Comanda</th>
                        <th>Data</th>
                        <th>Valor</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {caixalancamentos.map(caixalancamento =>
                        <tr key={caixalancamento.id}>
                            <td>{caixalancamento.id}</td>
                            <td>{caixalancamento.comanda}</td>
                            <td>{caixalancamento.datahora}</td>
                            <td>{caixalancamento.valor}</td>

                            <td>
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
        : ListaCaixa.renderCaixaLancamentoTabela(this.state.caixalancamentos);

        return(
            <div>
                <h1 id="tabelLabel" >Lançamentos do caixa</h1>
                <p>
                    
                </p>
                {contents}
            </div>
        );
    }

    async populaCaixaLancamentoData() {
        const response = await fetch(URL_API + '/api/caixalancamentoes');
        const data = await response.json();
        this.setState({caixalancamentos : data, loading: false});
    }
}
