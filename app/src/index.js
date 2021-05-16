import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../src/dist/main.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/js/bootstrap';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
