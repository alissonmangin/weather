import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="sun.png" className="App-logo" alt="logo" />
        <Weather />
      </header>
    </div>
  );
}

export default App;
