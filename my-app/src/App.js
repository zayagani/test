import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import NavBar from './Component/NavBar'
import Formly from './Component/Formly'
import CompA from './Component/CompA';
import CompB from './Component/CompB';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
   <div>
   <CompA />
  <Routes />

      </div>
    );
  }
}

export default App;
