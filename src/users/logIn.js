import React, { useState } from 'react';
import { API_URL, doApiMethod } from '../services/apiService';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const bodyData = {
      email: email,
      password: password
    };
    try {
      const response = await doApiMethod(`${API_URL}/users/login`, 'POST', bodyData);
      // Handle successful login response
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data);
    } catch (error) {
      // Handle login error
      console.error('Login error:', error);
    }

  };

  return (
    <div className="container mt-4" style={{ maxWidth: '600px' }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <div className="text-center mt-3">
        <p>Don't have an account? <a href="/user/register">Register</a></p>
      </div>
    </div>
  );
}
