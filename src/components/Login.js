import React from 'react';

export class Login extends React.Component {
    constructor() {
        super();

        this.state = { login: "" };
        this.state = { senha: "" };

        this.onChange = (evento) => {
            this.setState({ login: evento.target.value });
            this.setState({ senha: evento.target.value });
            console.log(evento);
        };

    }

    render() {
        return (
            <div className="Modal">
                <h2> Acesso ao sistema </h2>
                <form
                    onSubmit={this.props.onSubmit}
                    className="ModalForm">
                    <input
                        name="login"
                        value={this.state.login}
                        onChange={this.onChange}
                        type="text"
                        placeholder="insira seu usuário" />
                        <br /> Login digitado: {this.state.login}!
                        <br />
                    <input
                        name="senha"
                        value={this.state.senha}
                        onChange={this.onChange}
                        type="password"
                        placeholder="insira sua senha" />
                        <br />
                    <button>
                        Log in <i className="fa fa-fw fa-chevron-right"></i>
                    </button>
                </form>
            </div>
        );
    }
}
