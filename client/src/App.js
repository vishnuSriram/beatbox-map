import React from 'react';
import BeatboxerList from './components/BeatboxerList';
import './App.css';
// import logo from './logo.svg';

class App extends React.Component {
   render() {
      return (
         <div className="App">
            <h1>Welcome to Beatbox Map!</h1>
            <p>Written by: Vishnu, Shak, and Abdulla</p>
            <p>Here's a list of all the beatboxers in the Beatbox Map database!</p>
            <BeatboxerList/>
         </div>
      );
   }
}

export default App;