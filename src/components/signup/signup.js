import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/signup', { name, email, password });
      // Handle successful signup, e.g., redirect to login page
      console.log(response.data);
      navigate('/login'); // Redirect to login page
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Signup</h2>
      <Form onSubmit={handleSignup}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name:</Form.Label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>&nbsp;&nbsp;&nbsp;
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        {error && (
          <Alert variant="danger" className="mt-3">
            {error}
          </Alert>
        )}

        <Button variant="primary" type="submit" className="mt-3">
          Signup
        </Button>
      </Form>
    </Container>
  );
};

export default SignupPage;
