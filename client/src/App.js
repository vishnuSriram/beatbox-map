import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Initialize state
  state = { beatboxers: [] }

  // Fetch beatboxers from database
  componentDidMount() {
    this.getBeatboxers();
  }

  getBeatboxers = () => {
    // Converting user data to JSON after mounting
    fetch('/api/beatboxers')
      .then(res => res.json())
      .then(beatboxers => this.setState({ beatboxers }));
  }

  render() {
    // state container for beatboxers
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
