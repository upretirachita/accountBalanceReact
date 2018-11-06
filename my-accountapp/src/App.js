import React, { Component } from 'react';
import './App.css';
import Balance from './components/Balance';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Account Balance </h1>
        <div >
          <Balance />
        </div>
      </div>
    );
  }
}

export default App;

