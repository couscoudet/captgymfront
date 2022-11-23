import React from 'react'
import { Navigate } from 'react-router-dom';

export default function DisconnectPage({userSwitch}) {
    
    const removeToken = () => {
      window.localStorage.removeItem('token');
      console.log('token supprimé');
      
    }

    removeToken();
    userSwitch(false);
    return (<Navigate to="/login" replace={true} />)
  }