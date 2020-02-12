import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, 
  browserHistory 
} from "react-router-dom";



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
browserHistory.push('/')
