import React, { useState } from 'react';
import { Container } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Login from './Login';
import Welcome from './Welcome';
import Header from './Header';
import Menu from './Menu'; // Assuming you have a Menu component
import users from './Data/Users.json'; // Import Users.json from Data folder

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <Router>
      <AppContent 
        isAuthenticated={isAuthenticated} 
        username={username} 
        setIsAuthenticated={setIsAuthenticated} // Add setIsAuthenticated prop
        setUsername={setUsername} // Add setUsername prop
      />
    </Router>
  );
}

function AppContent({ isAuthenticated, username, setIsAuthenticated, setUsername }) {
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
    <Container>
      {isAuthenticated && <Header username={username} onLogout={handleLogout} onMenuClick={handleMenuClick} onTitleClick={handleTitleClick} />}
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/welcome" /> : <Login onLogin={handleLogin} />} />
        <Route path="/welcome" element={isAuthenticated ? <Welcome username={username} /> : <Navigate to="/login" />} />
        <Route path="/menu" element={isAuthenticated ? <Menu /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to={isAuthenticated ? "/welcome" : "/login"} />} />
      </Routes>
    </Container>
  );
}

export default App;
