import React, { Component } from 'react';
import TemperatureConverter from './components/TemperatureConverter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Temperature Converter</h1>
        <TemperatureConverter />
      </div>
    );
  }
}

export default App;
