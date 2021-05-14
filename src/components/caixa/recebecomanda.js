import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class AddCaixaRecebe extends React.Component {
    constructor(props) {
        super();
        this.state = {
            id: 0,
            idcaixacontrole: 1,
            datahora: '',
            tipolancamento: 'E',
            valor: 0,
            idformapagamento: 0,
            observacao: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(evento) {
        const data = JSON.stringify(this.state)
        alert('Um formulario foi enviado:' + data);
        evento.preventDefault();

        fetch('https://localhost:44331/api/caixalancamentoes', {
           method: 'POST',
           headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
           },
            body: data
        }).then(function(response) {
            toast.success('Comanda recebida e encerrada!')
            return response.json();
        }).catch(function(erro) {
            toast.error('Erro ao encerrar comanda')
        })

        const response2 = await fetch('https://localhost:44331/api/caixalancamentoes');
        const datalan = await response2.json();
        alert('lancamentos efetuados:' + datalan);
        this.setState({caixalancamentos : datalan, loading: true });

    }

    render() {
        return(
        <div class="container">
            <ToastContainer />
            <div class="card mx-auto shadow -lg p-3 mb-5 bg-white rounded animate_animated animate_zoomIn">
                <h2>Recebimento de Comanda</h2>
            <form onSubmit={this.handleSubmit}>
                <label>No. da Comanda...............:</label>
                    <input
                        type="int"
                    />
                    <br />
                <label>Data/Hora............................:</label>
                    <input
                        name="datahora"
                        type="datetime-local"
                        onChange={e => this.setState({datahora: e.target.value})}
                    />
                    <br />
                <label>Valor.......................................:</label>
                    <input
                        name="valor"
                        type="float"
                        onChange={e => this.setState({valor: e.target.value})}
                    />
                    <br />
                <label>Forma de Pagamento......:</label>
                <select  name="idformapagamento"
                    onChange={e => this.setState({idformapagamento: e.target.value})}>
                        <option value="">Selecione</option>
                        <option value="1">Dinheiro</option>
                        <option value="2">Débito</option>
                        <option value="3">Crédito</option>
                </select>
                <br />
                <input type="submit" value="Receber" />
            </form>
            </div>
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th></th>
                    </tr>

                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
        );
    }
}