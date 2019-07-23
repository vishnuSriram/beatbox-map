// App.js

import React from 'react';
import './App.css';
import BeatboxerTable from './components/BeatboxerTable';

class App extends React.Component {
   render() {
      return (
         <div className="App">
            <h1>Welcome to Beatbox Map!</h1>
            <p>Written by: Vishnu, Shak, and Abdulla</p>
            <p>Here's a list of all the beatboxers in the Beatbox Map database!</p>
            <BeatboxerTable/>
         </div>
      );
   }
}

export default App;