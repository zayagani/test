import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import NavBar from './Component/NavBar'
import Formly from './Component/Formly'
import CompA from './Component/CompA';
import CompB from './Component/CompB';
import Routes from './Routes';
import ButtonStyle from './StyledComponent/ButtonStyle';
import Counter from './StyledComponent/Counter';
import Example from './Component/HookComp';
import CounterHooks from './HooksComponent/CounterHooks';
import HooksApi from './HooksComponent/HooksApi';

class App extends Component {
  render() {
    return (
   <div>
   <CompA />
  <Routes />
<ButtonStyle />
<Counter />
<Example/>
<CounterHooks/>
<HooksApi/>
      </div>
    );
  }
}

export default App;
