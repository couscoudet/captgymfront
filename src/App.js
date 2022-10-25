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

function App() {
  const [user, setUser] = React.useState(true);
  
  return (
    <div className="App">
     <Routes>
        <Route element={<PrivateRoute user={user} />} >
        <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/partners" element={<PartnersPage />} />
        </Routes>
    </div>
  );
}

export default App;
