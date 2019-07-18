import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Initialize state
  state = { passwords: [] }

  // Fetch beatboxers after first mount
  componentDidMount() {
    this.getBeatboxers();
  }

  getPasswords = () => {
    // Get beatboxers and store them in state
    fetch('/api/beatboxers')
      .then(res => res.json())
      .then(beatboxers => this.setState({ beatboxers }));
  }

  render() {
    const { beatboxers } = this.state;

    return (
      <div className="App">
        <h1>Welcome to Beatbox Map!</h1>
        <p>Written by: Vishnu, Shak, and Abdulla</p>
      </div>
    );
  }
}

export default App;
