import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './signup.css'; // Import the custom CSS file

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // const response = await axios.post('/api/signup', { name, email, password });
      // Handle successful signup, e.g., redirect to login page
      // console.log(response.data);
      navigate('/login'); // Redirect to login page
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <Container className="mt-5 signup-container">
      <h2 className="text-center">Signup</h2>
      <Form onSubmit={handleSignup}>
        <div className="form-group">
          <label htmlFor="formBasicName">Name:</label>
          <input
            type="text"
            id="formBasicName"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

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
          Signup
        </Button>
      </Form>
    </Container>
  );
};

export default SignupPage;
