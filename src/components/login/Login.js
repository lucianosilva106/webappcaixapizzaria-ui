import React from 'react';
import './Login.css';
import { Button, Form, Container } from 'reactstrap';
//import MontaDropDownLogin from './montadropdownlogin';
import { alert } from 'bootstrap';
import { withRouter} from 'react-router-dom';
//import URL_API from '../../service/service-api'
import {login} from '../../service/auth'

//import { response } from 'express';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {senha: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e) {
        e.preventDefault();
        const {email, password} = this.state;
        if (!email || !password) {
          alert("Preencha e-mail e senha para continuar!");
          return
        }
        try {
          //let response = await fetch("/login", {email, password});
          // response = response.json()
          const response = {data: {token: '12112321321323213'}}
          login(response.data.token);
          this.props.history.push("/caixa-controle");
        } catch (err) {
         alert("Houve um problema com o login, verifique suas credenciais. T.T");
        }
    }

    render() {
        return (
          <Container>
            <body>
            <div className="container col-md-6">
              <div className="box">
                <div class="card mx-auto shadow -lg p-5 mb-5 bg-white rounded animate_animated animate_zoomIn">
                  <Form className="login-form" onSubmit={this.handleSubmit}>
                    <h2>
                      <span className="font-weight-bold">Acesso ao sistema</span>
                    </h2>
                    <br/>
                    <input type="email" placeholder="Endereço de e-mail"
                           onChange={e => this.setState({email: e.target.value})}/>
                    <input type="password" placeholder="Senha" onChange={e => this.setState({password: e.target.value})}/>
    
                    <br/>
                    <Button className="col-md-12 btn-lg btn-dark btn-block" type="submit" value="Enviar">Log in</Button>
                  </Form>
                </div>
              </div>
            </div>
            </body>
          </Container>
        );
      }
}
export default withRouter(Login)