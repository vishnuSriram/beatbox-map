// App.js

import React from 'react';
import './App.css';
import BeatboxerTable from './components/BeatboxerTable';

class App extends React.Component {
   render() {
      return (
         <div className="App">
            <div class="topnav">
               <a class="active" href="home">Home</a>
               <a href="search">Search Beatboxer</a>
               <a href="add">Add Beatboxer</a>
               <a href="update">Update Beatboxer</a>
               <a href="delete">Delete Beatboxer</a>
            </div>

            <h1>Welcome to Beatbox Map!</h1>
            <p>Written by: Vishnu, Shak, and Abdulla</p>
            <p>Here's a list of all the beatboxers in the Beatbox Map database!</p>
            <BeatboxerTable/>
         </div>
      );
   }
}

export default App;