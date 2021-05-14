import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class AddAberturaCaixa extends React.Component {
    constructor(props) {
        super();
        this.state = {
            id: 0,
            datahoraabertura: '',
            idfuncionario: 0,
            valorfundocaixa: 0,
            datahorafechamento: '2021-05-14T10:45:00',
            valorfinalcaixa: 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    async handleSubmit(evento) {
        const data = JSON.stringify(this.state)
        alert('Um formulario foi enviado:' + data);
        evento.preventDefault();

        fetch('https://localhost:44331/api/caixacontroles', {
           method: 'POST',
           headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
           },
            body: data
        }).then(function(response) {
            toast.success('Caixa aberto sucesso!')
            return response.json();
        }).catch(function(erro) {
            toast.error('Erro ao abrir caixa')
        })
    }

    render() {
        return(
        <div class="container">
            <ToastContainer />
            <div class="card mx-auto shadow -lg p-3 mb-5 bg-white rounded animate_animated animate_zoomIn">
            <form onSubmit={this.handleSubmit}>
                <label>Data/Hora Abertura...:</label>
                    <input
                        name="datahoraabertura"
                        type="datetime-local"
                        onChange={e => this.setState({datahoraabertura: e.target.value})}
                    />
                    <br />
                <label>Funcionario...................:</label>
                    <input
                        name="idfuncionario"
                        type="int"
                        onChange={e => this.setState({idfuncionario: e.target.value})}
                    />
                    <br />
                <label>Valor Inicial de Caixa..:</label>
                    <input
                        name="valorfundocaixa"
                        type="text"
                        onChange={e => this.setState({valorfundocaixa: e.target.value})}
                    />
                    <br />
                <input type="submit" value="Enviar" />
            </form>
            </div>
        </div>
        );
    }
}