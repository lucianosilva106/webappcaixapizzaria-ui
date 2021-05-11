import React, { Component } from "react"
import { Link } from 'react-router-dom'

export class FetchLogin extends React.Component {
    constructor() {
        super();

        this.state = { login: "" };
        this.state = { senha: "" };

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
                <h2> Acesso ao sistema </h2>
                <form
                    onSubmit={this.props.onSubmit}
                    className="ModalForm">
                    <input
                        name="login"
                        type="text"
                        placeholder="insira seu usuário" />
                        <br />
                    <input
                        name="senha"
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
