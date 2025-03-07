import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
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
    <Row className="login-container vh-100">
      <Col md="6" className="quote-container d-flex align-items-center justify-content-center">
        <h2 className="quote-text">"The only true wisdom is in knowing you know nothing." - Socrates</h2>
      </Col>
      <Col md="6" className="form-container d-flex align-items-center justify-content-center">
        <div>
          <h2>Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
}

export default Login;
