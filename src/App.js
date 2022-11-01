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
  const [user, setUser] = React.useState(window.localStorage.getItem('token'));
  
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
        <Route path="/login" element={<LoginPage element={user} />} />
        <Route path="/disconnect" element={<DisconnectPage />} />
      </Routes>
    </div>
  );
}

export default App;
