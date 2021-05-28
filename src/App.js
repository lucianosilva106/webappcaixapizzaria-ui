import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import {Layout} from './components/Layout';
import {Home} from './components/Home';
import Login from './components/login/Login';
import {ListaFuncionario} from './components/funcionario/ListaFuncionarios';
import {AddAberturaCaixa} from './components/caixa/aberturacaixa';
import AddCaixaRecebe from './components/caixa/recebecomanda';
import AddCaixaSangria from './components/caixa/lancasangria';
import ListaCaixa from './components/caixa/listacaixa';
import ListaLancamento from './components/caixa/listalancamento';
import {AddFuncionario} from './components/funcionario/AddFuncionario';
import FechamentoCaixa from './components/caixa/fechamentocaixa';
import {isAuthenticated} from './service/auth'

import './custom.css'

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ?
        (<Component {...props} />) :
        (<Redirect to={{pathname: "/login", state: {from: props.location}}}/>)
    }
  />
)

export default class App extends Component {
  static displayname = App.name;

  render() {
    return (
      <Router>
        <Layout>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <PrivateRoute path='/funcionario-lista' component={ListaFuncionario}/>
          <PrivateRoute path='/caixa-abertura' component={AddAberturaCaixa}/>
          <PrivateRoute path='/caixa-recebe/:id' component={AddCaixaRecebe}/>
          <PrivateRoute path='/caixa-sangria/:id' component={AddCaixaSangria}/>
          <PrivateRoute path='/caixa-controle' component={ListaCaixa}/>
          <PrivateRoute path='/caixa-lancamento/:id' component={ListaLancamento}/>
          <PrivateRoute path='/caixa-fechamento/edit/:id' component={FechamentoCaixa}/>
          <PrivateRoute path='/funcionario-add' component={AddFuncionario}/>
        </Layout>
      </Router>
    );
  }
}

