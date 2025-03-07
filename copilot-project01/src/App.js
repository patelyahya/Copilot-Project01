import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Welcome from './Welcome';
import Header from './Header';
import Menu from './Menu'; // Assuming you have a Menu component
import users from './Data/Users.json'; // Import Users.json from Data folder

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username, password) => {
    // Perform authentication logic here
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      setIsAuthenticated(true);
      setUsername(username);
      navigate('/welcome'); // Navigate to Welcome page on successful authentication
    } else {
      alert('Authentication failed'); // Add alert for authentication failure
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
  };

  return (
    <Router>
      <AppContent 
        isAuthenticated={isAuthenticated} 
        username={username} 
        onLogin={handleLogin} 
        onLogout={handleLogout} 
      />
    </Router>
  );
}

function AppContent({ isAuthenticated, username, onLogin, onLogout }) {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    // Handle menu click logic here
    console.log('Menu clicked');
    navigate('/menu');
  };

  const handleTitleClick = () => {
    // Handle title click logic here
    console.log('Title clicked');
    navigate('/welcome');
  };

  return (
    <Container>
      {isAuthenticated && <Header username={username} onLogout={onLogout} onMenuClick={handleMenuClick} onTitleClick={handleTitleClick} />}
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/welcome" /> : <Login onLogin={onLogin} />} />
        <Route path="/welcome" element={isAuthenticated ? <Welcome username={username} /> : <Navigate to="/login" />} />
        <Route path="/menu" element={isAuthenticated ? <Menu /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to={isAuthenticated ? "/welcome" : "/login"} />} />
      </Routes>
    </Container>
  );
}

export default App;
