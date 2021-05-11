import React from 'react';
import ReactDOM from 'react-dom';
import './custom.css';


class Input extends React.Component {
    constructor() {
        super();

        this.state = {nome: ""};
        this.state = {chapeira: ""};
        this.state = {login: ""};
        this.state = {senha: ""};

        this.onChange = (evento) => {
            this.setState({ nome: evento.target.value });
        };
    }

    render() {
        return (
            <div>
                Nome: <input name="nome" value={this.state.nome} onChange={this.onChange} type="text" />
                Chapeira: <input name="chapeira" value={this.state.chapeira} onChange={this.onChange} type="text" />
                Login: <input name="login" value={this.state.login} onChange={this.onChange} type="text" />
                Senha: <input name="senha" value={this.state.senha} onChange={this.onChange} type="text" />
            </div>
        );
    }
}
