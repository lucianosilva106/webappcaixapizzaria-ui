import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Layout} from './components/Layout';
import {Home} from './components/Home';
import {Login} from './components/Login';
import {ListaFuncionario} from './components/funcionario/ListaFuncionarios';
import {AddAberturaCaixa} from './components/caixa/aberturacaixa';
import {ListaCaixalancamento} from './components/caixa/lancamentocaixa';
import {AddFuncionario} from './components/funcionario/AddFuncionario';

import './custom.css'

export default class App extends Component {
  static displayname = App.name;

  render() {
    return (
      <Router>
        <Layout>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/funcionario-lista' component={ListaFuncionario}/>
          <Route path='/caixa-abertura' component={AddAberturaCaixa}/>
          <Route path='/caixa-lancamento' component={ListaCaixalancamento}/>
          <Route path='/funcionario-add' component={AddFuncionario}/>
        </Layout>
      </Router>
    );
  }
}

