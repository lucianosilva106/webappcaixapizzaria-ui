import React from 'react';
import './Login.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


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
            <body>

                <div className="container col-md-6">
                    <div className="box">
                        <div class="card mx-auto shadow -lg p-5 mb-5 bg-white rounded animate_animated animate_zoomIn">
                            <Form className="login-form" onSubmit={this.props.onSubmit}>
                                <h2>
                                    <span className="font-weight-bold">Acesso ao sistema</span>
                                </h2>
                                <br/>
                                <FormGroup>
                                    <Label>Login</Label>
                                    <Input name="login" type="text" placeholder="Insira seu usuário" value={this.state.login} onChange={this.onChange}></Input>
                                </FormGroup>
                                <br/>
                                <FormGroup>
                                    <Label>Senha</Label>
                                    <Input name="senha" type="password" placeholder="Insira sua senha" value={this.state.senha} onChange={this.onChange}></Input>
                                </FormGroup>
                                <br/>
                                <Button className="col-md-12 btn-lg btn-dark btn-block" type="submit" value="Enviar">
                                Log in 
                            </Button>
                            </Form>
                            
                            
                           
                        </div>
                    </div>
                </div>
            </body>
        );
    }
}
