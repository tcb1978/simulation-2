import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Main from './Main.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      picture: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/test')
      .then(response => {
        this.setState({
          picture: response.data
        })
      })
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <Main />
      </div>
    );
  }
}

export default App;
