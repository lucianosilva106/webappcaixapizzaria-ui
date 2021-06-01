import React from 'react';
import './Login.css';
import { Button, Form, Container } from 'reactstrap';
import { withRouter} from 'react-router-dom';
import URL_API from '../../service/service-api'
import {login} from '../../service/auth'

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
          const LogObject = {
              email: this.state.email,
              senha: this.state.password
          }
          const datalog = JSON.stringify(LogObject)
          let response = await fetch(URL_API + "/api/login/", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: datalog
          })
          response = await response.json()
          if (response.token > 0)
          {
            login(response.token);
            this.props.history.push("/caixa-controle");
          }
          else
          {
            alert("Login e/ou Senha inválidos!")
            this.props.history.push("/home");
          }
        } catch (err) {
          alert("Houve um problema com o login, verifique suas credenciais. T.T");
          this.props.history.push("/home");
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
                    <br/>
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