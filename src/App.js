import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Layout} from './components/Layout';
import {Home} from './components/Home';
import {Login} from './components/login/Login';
import {ListaFuncionario} from './components/funcionario/ListaFuncionarios';
import {AddAberturaCaixa} from './components/caixa/aberturacaixa';
import {AddCaixaRecebe} from './components/caixa/recebecomanda';
import {AddCaixaSangria} from './components/caixa/lancasangria';
import {ListaCaixa} from './components/caixa/listalancamento';
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
          <Route path='/caixa-recebe' component={AddCaixaRecebe}/>
          <Route path='/caixa-sangria' component={AddCaixaSangria}/>
          <Route path='/caixa-lancamento' component={ListaCaixa}/>
          <Route path='/funcionario-add' component={AddFuncionario}/>
        </Layout>
      </Router>
    );
  }
}

