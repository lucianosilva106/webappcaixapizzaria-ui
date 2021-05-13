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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evento) {
        this.setState({id: evento.target.id});
        this.setState({fun_nome: evento.target.fun_nome});
        this.setState({fun_chapeira: evento.target.fun_chapeira});
        this.setState({fun_login: evento.target.fun_login});
        this.setState({fun_senha: evento.target.fun_senha});
        evento.preventDefault();
    }

    async handleSubmit(evento) {
        alert('Um formulario foi enviado:' + JSON.stringify(this.state));
        evento.preventDefault();

//        try {
//           const response = await fetch('https://localhost:44331/api/funcionarios', {  
//                method: 'POST', 
//                body: JSON.stringify(this.state) });
//             return response.json();
//            // toast.success('Salvo com sucesso!');
//        }
//        catch(error) {
            //    toast.error('Ocorreu um erro ao salvar!');
//                Alert('Erro ao salvar!')
            //    console.error(error);
 //       }

       fetch('https://localhost:44331/api/funcionarios', {
           method: 'POST',
            body: {"id":'',"fun_nome":'mario',"fun_chapeira":'123',"fun_login":'mario.com',"fun_senha":'123mudar'}
        }).then(function(response) {
            console.log(response)
            return response.json();
        });

        evento.preventDefault();
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
                        value={this.state.id}
                        onChange={this.handleChange} 
                    />
                    <br />
                Nome:
                    <input 
                        name="fun_nome"
                        type="text" 
                        value={this.state.fun_nome}
                        onChange={this.handleChange} 
                    />
                    <br />
                Chapeira:
                    <input 
                        name="fun_chapeira"
                        type="text" 
                        value={this.state.fun_chapeira}
                        onChange={this.handleChange} 
                    />
                    <br />
                Login:
                    <input 
                        name="fun_login"
                        type="text" 
                        value={this.state.fun_login}
                        onChange={this.handleChange} 
                    />
                    <br />
                Senha:
                    <input 
                        name="fun_senha"
                        type="password" 
                        value={this.state.fun_senha}
                        onChange={this.handleChange} 
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
