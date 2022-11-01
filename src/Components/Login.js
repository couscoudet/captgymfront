import React, { useState } from 'react';
import Home from './Home';
import { Navigate } from 'react-router-dom';

const Login = ({ loginUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  return (
    <div style={{ display: "flex", justifyContent: "flex-start" }} onSubmit={loginUser}>
      <label>Email</label>
      <input value={email} onChange={(event) => setEmail(event.currentTarget.value)} />
      <label>
        Password:
      </label>
      <input type="password" value={password} onChange={(event) => setPassword(event.currentTarget.value)} />
      <button onClick={(event) => loginUser(email, password)}>Connexion</button>
    </div>
  )
}

export default Login;