import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

export class CadFuncionario extends React.Component {
    constructor() {
        super();

        this.state = { 
          Nome: "", Chapeira: "", Login: "", Senha: "" };

        this.onChange = (evento) => {
            this.setState({ nome: evento.target.value });
        };

        this.onSubmit = (evento) => {
            console.log(this.state);
        };
    }

    render() {
        return (
            <div className="Modal">
                <h2> Cadastro de Funcionário </h2>
                <form
                    onSubmit={this.props.onSubmit}
                    className="ModalForm">
                    <input
                        name="nome"
                        type="text"
                        placeholder="insira seu nome" />
                        <br />
                    <input
                        name="chapeira"
                        type="text"
                        placeholder="insira sua chapeira" />
                        <br />
                    <input
                        name="login"
                        type="text"
                        placeholder="insira seu login" />
                        <br />
                    <input
                        name="senha"
                        type="password"
                        placeholder="insira sua senha" />
                        <br />
                    <button>
                        Enviar <i className="fa fa-fw fa-chevron-right"></i>
                    </button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<CadFuncionario />, document.getElementById('root'));
