import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Welcome from './Welcome';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username, password) => {
    // Perform authentication logic here
    console.log('Username:', username);
    console.log('Password:', password);
    setIsAuthenticated(true);
    setUsername(username);
  };

  return (
    <Container>
      {isAuthenticated ? <Welcome username={username} /> : <Login onLogin={handleLogin} />}
    </Container>
  );
}

export default App;
