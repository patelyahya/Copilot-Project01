import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Paper } from '@mui/material';
import Grid2 from '@mui/material/Grid2'; // Import Grid2 component
import './Login.css'; // Import the CSS file

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === '' || password === '') {
      alert('Username and Password fields cannot be left blank');
      return;
    }
    onLogin(username, password);
  };

  return (
    <Container className="login-container" maxWidth="lg"> {/* Change maxWidth to lg */}
      <Grid2 container spacing={4} alignItems="center" justifyContent="center">
        <Grid2 item md={6}>
          <div className="quote-container" style={{ backgroundColor: 'transparent' }}>
            <Typography variant="h4" className="quote-text" style={{ fontStyle: 'italic' }}>
              "The only true wisdom is in knowing you know nothing." - Socrates
            </Typography>
          </div>
        </Grid2>
        <Grid2 item md={6}>
          <Paper elevation={3} className="form-container">
            <Typography variant="h4" gutterBottom>
              Login
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant="contained" color="primary" type="submit" fullWidth className="btn-primary">
                Submit
              </Button>
            </form>
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default Login;
