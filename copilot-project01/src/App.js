import logo from './logo.svg';
import './App.css';
import Header from './Header';
import React, { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [username, setUsername] = useState('John Doe');

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      {isAuthenticated && <Header username={username} onLogout={handleLogout} />}
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

export default App;
