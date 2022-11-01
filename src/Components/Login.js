import React, { useState } from 'react';
import Home from './Home';
import { Navigate } from 'react-router-dom';
import MyButton from './MyButton.js';

const Login = ({ loginUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  return (
    <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }} onSubmit={loginUser}>
      <label>Email</label>
      <input value={email} onChange={(event) => setEmail(event.currentTarget.value)} />
      <label>
        Password:
      </label>
      <input type="password" value={password} onChange={(event) => setPassword(event.currentTarget.value)} />
      <MyButton onClick={(event) => loginUser(email, password)}>Connexion</MyButton>
    </div>
  )
}

export default Login;