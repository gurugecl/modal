import React, { Component } from 'react';
import './App.css';
import Modal from './Modal';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Vood</h2>
        </div>
          <Modal />
      </div>
    );
  }
}

export default App;
