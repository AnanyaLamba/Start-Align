import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";
import { useDispatch } from "react-redux";
import { authActions } from "./../store/index"; 

import { useNavigate } from "react-router-dom";// Assuming Login.css exists for styling

const Login = () => {
  let dispatch = useDispatch();
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleLogin = (e) => {
    e.preventDefault();
    // Simple validation
    if (email === '' || password === '') {
      setError('Please fill in all fields');
    } else {
      // Add logic for API call or backend authentication here
      setError('');
      console.log('Logged in with:', { email, password });
      dispatch(authActions.login());
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> <br/>        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> <br/>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Signup</Link></p>
    </div>
  );
};

export default Login;
