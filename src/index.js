import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const HelloWorld = (props) => (
  <div>
    <h1>Hello {props.name}</h1>
  </div>
);

ReactDOM.render(
<HelloWorld name="Mateus"/>,
  document.getElementById('root')
);
