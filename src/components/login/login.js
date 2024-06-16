import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './login.css'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // const response = await axios.post('/api/login', { email, password });
      // console.log(response.data);
      
      // Navigate to home page after successful login
      navigate('/');
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <Container className="mt-5 login-container">
      <h2 className="text-center">Login</h2>
      <Form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="formBasicEmail">Email:</label>
          <input
            type="email"
            id="formBasicEmail"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="formBasicPassword">Password:</label>
          <input
            type="password"
            id="formBasicPassword"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && (
          <Alert variant="danger" className="mt-3">
            {error}
          </Alert>
        )}

        <Button variant="primary" type="submit" className="mt-3">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
