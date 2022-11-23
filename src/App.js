import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import Routing from './routing/Routing.js';
import Home from './Components/Home.js';
import LoginPage from './Components/LoginPage.js';
import PrivateRoute from './routing/PrivateRoute.js';
import { Button } from 'bootstrap';
import Contacts from './Components/Contacts.js';
import PartnersPage from './Components/PartnersPage.js';
import DisconnectPage from './Components/DisconnectPage.js';

function App() {
  const [user, setUser] = React.useState(isTokenValid(window.localStorage.getItem('token')));

  function parseJwt(token) {
    if (token) {    
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
    }
    else {
      return 0
    }

  }

  function isTokenValid(token) {
    return Date.now()/1000 < parseJwt(token).exp
  }

  if (user) {console.log("app : user connecté")};

  return (
    <div className="App">
     <Routes>
        <Route path="/" element={
          <PrivateRoute user={user}>
            <Home />
          </PrivateRoute>
            } />
        <Route path="/contacts" element={
          <PrivateRoute user={user}>
            <Home />
          </PrivateRoute>
            } />
        <Route path="/partners" element={
          <PrivateRoute user={user}>
            <PartnersPage />
          </PrivateRoute>
            } />
        <Route path="/sport-rooms" element={
          <PrivateRoute user={user}>
            <Home />
          </PrivateRoute>
            } />
        <Route path="/login" element={<LoginPage user={user} userSwitch={setUser}/>} />
        <Route path="/disconnect" element={<DisconnectPage userSwitch={setUser}/>} />
      </Routes>
    </div>
  );
}

export default App;
