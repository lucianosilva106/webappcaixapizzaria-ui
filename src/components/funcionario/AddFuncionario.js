import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class AddFuncionario extends React.Component {
    constructor(props) {
        super();
        this.state = {
            id: 0,
            fun_nome: '',
            fun_chapeira: '',
            fun_login: '',
            fun_senha: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    async handleSubmit(evento) {
        const data = JSON.stringify(this.state)
        alert('Um formulario foi enviado:' + data);
        evento.preventDefault();

        fetch('https://localhost:44331/api/funcionarios', {
           method: 'POST',
           headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
           },
            body: data
        }).then(function(response) {
            toast.success('Dados cadastrados com sucesso')
            return response.json();
        }).catch(function(erro) {
            toast.error('Erro ao cadastrar')
        })
    }

    render() {
        return(
        <div class="container">
            <ToastContainer />
            <div class="card mx-auto shadow -lg p-3 mb-5 bg-white rounded animate_animated animate_zoomIn">
            <form onSubmit={this.handleSubmit}>
                <label>
                Nome:
                    <input
                        name="fun_nome"
                        type="text"
                        onChange={e => this.setState({fun_nome: e.target.value})}
                    />
                    <br />
                Chapeira:
                    <input
                        name="fun_chapeira"
                        type="text"
                        onChange={e => this.setState({fun_chapeira: e.target.value})}
                    />
                    <br />
                Login:
                    <input
                        name="fun_login"
                        type="text"
                        onChange={e => this.setState({fun_login: e.target.value})}
                    />
                    <br />
                Senha:
                    <input
                        name="fun_senha"
                        type="password"
                        onChange={e => this.setState({fun_senha: e.target.value})}
                    />
                    <br />
                </label>
                <input type="submit" value="Enviar" />
            </form>
            </div>
        </div>
        );
    }
}