import React, { Component } from 'react'
import URL_API from '../../service/service-api';
import { withRouter} from 'react-router-dom';

class ListaCaixa extends Component {
    static displayName = "Lista de Abertura/Fechamento de Caixas";

    constructor() {
        super();
        this.state = { caixacontroles: [], loading: true}
    }

    componentDidMount() {
        this.populaCaixacontroleData();
    }

    static handleEdit(id) {
        window.location.href = "/caixa-fechamento/edit/" + id;
    }

    static handleLancamento(id) {
        window.location.href = "/caixa-lancamento/"+ id;
    }

    static renderCaixacontrolesTabela(caixacontroles) {
        
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
              <thead>
                    <tr>
                        <th>Código</th>
                        <th>Data/Hora Abertura</th>
                        <th>Func</th>
                        <th>Valor Fundo Caixa</th>
                        <th>Data/Hora Fechamento</th>
                        <th>Valor Final Caixa</th>
                        <th>Flag Fechado</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {caixacontroles.map(caixacontrole =>
                        <tr key={caixacontrole.id}>
                            <td> {caixacontrole.id} </td>
                            <td>{caixacontrole.datahoraabertura} </td>
                            <td>{caixacontrole.idfuncionario}</td>
                            <td>{caixacontrole.valorfundocaixa}</td>
                            <td>{caixacontrole.datahorafechamento}</td>
                            <td>{caixacontrole.valorfinalcaixa}</td>
                            <td>{caixacontrole.flagcaixafechado}</td>

                            <td>
                                <button className="btn btn-success" onClick={(id) => this.handleEdit(caixacontrole.id)}>Fechar Caixa</button> &nbsp;
                                <button className="btn btn-danger" onClick={(id) => this.handleLancamento(caixacontrole.id)}>Lancamentos</button>
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
        : ListaCaixa.renderCaixacontrolesTabela(this.state.caixacontroles);

        return(
            <div>
                <h1 id="tabelLabel" >Controles de Caixas</h1>
                <p>
                    
                </p>
                {contents}
            </div>
        );
    }

    async populaCaixacontroleData() {
        const response = await fetch(URL_API + '/api/caixacontroles');
        const data = await response.json();
        this.setState({caixacontroles : data, loading: false});
    }
}

export default withRouter(ListaCaixa);