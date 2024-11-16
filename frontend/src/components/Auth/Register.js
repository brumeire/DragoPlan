import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    try {
      const response = await axios.post('https://dragoplan.onrender.com/api/auth/register', { email, password });
      const { token, user } = response.data;

      // Store the token in localStorage
      localStorage.setItem('token', token);

      // Set the user in state
      setUser(user);
    } catch (err) {
      if (err.response) {
        // Detailed error message from backend
        console.error("Backend returned status:", err.response.status);
        console.error("Error message:", err.response.data.message || err.response.statusText);

        // Update error state with more detailed message
        setError(`Error: ${err.response.data.message || 'An error occurred'}`);
      } else if (err.request) {
        // The request was made but no response was received
        console.error("Request error:", err.request);
        setError('Network error: No response from the server');
      } else {
        // Something happened in setting up the request
        console.error("Error setting up the request:", err.message);
        setError(`Error: ${err.message}`);
      }
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
