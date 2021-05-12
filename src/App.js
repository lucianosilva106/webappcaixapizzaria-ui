import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Layout} from './components/Layout';
import {Home} from './components/Home';
import {Login} from './components/Login';
import {ListaFuncionario} from './components/funcionario/ListaFuncionarios';

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
        </Layout>
      </Router>
    );
  }
}

