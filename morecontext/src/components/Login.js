import React, { useState, useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';

function Login() {
  const { username, setUsername, setShowProfile } = useContext(LoginContext);

  return (
    <div className="login">
      <input
        type="text"
        placeholder="username.."
        onChange={(e) => setUsername(e.target.value)}
      />
      <input type="text" placeholder="Password..." />
      <button
        onClick={() => {
          setShowProfile(true);
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
