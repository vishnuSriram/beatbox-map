import React from 'react';
import Header from './components/Header'; // why is the linter catching this...?
import Content from './components/Content';
import './App.css';
// import logo from './logo.svg';

class App extends React.Component {
   render() {
      return (
         <div className="App">
            <Header/>
            <Content/>
         </div>
      );
   }
}

export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
