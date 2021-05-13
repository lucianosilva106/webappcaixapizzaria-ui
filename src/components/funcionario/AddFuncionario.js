import { Alert } from 'bootstrap';
import React from 'react';
//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify / dist / ReactToastify.css';

export class AddFuncionario extends React.Component {
    constructor(props) {
        super();
        this.state = {
            id: '',
            fun_nome: '',
            fun_chapeira: '',
            fun_login: '',
            fun_senha: ''
        };

//        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

//    handleChange(evento) {
//        this.setState({id: evento.target.id});
//        this.setState({fun_nome: evento.target.fun_nome});
//        this.setState({fun_chapeira: evento.target.fun_chapeira});
//        this.setState({fun_login: evento.target.fun_login});
//        this.setState({fun_senha: evento.target.fun_senha});
//        evento.preventDefault();
//    }

    async handleSubmit(evento) {
        alert('Um formulario foi enviado:' + JSON.stringify(this.state));
        evento.preventDefault();

        fetch('https://localhost:44331/api/funcionarios', {
           method: 'POST',
            body: JSON.stringify(this.state) 
        }).then(function(response) {
            console.log(response)
            return response.json();
        });
    }

    render() {
        return(
        <div class="container">
            <div class="card mx-auto shadow -lg p-3 mb-5 bg-white rounded animate__animated animate__zoomIn">
            <form onSubmit={this.handleSubmit}>
                <label>
                Id:
                    <input 
                        name="id"
                        type="number"
                        onChange={e => this.setState({id: e.target.value})}
                    />
                    <br />
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
