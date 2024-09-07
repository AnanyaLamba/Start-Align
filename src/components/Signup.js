import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Signup.css"; // Assuming Login.css exists for styling
import { useDispatch } from "react-redux";
import { authActions } from "./../store/index";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  let dispatch = useDispatch();
  const history=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
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
      <h2>Register</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
      <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> <br/> 
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
        <button type="submit">Signup</button>
      </form>
      <p>If already have account.  <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Signup;
