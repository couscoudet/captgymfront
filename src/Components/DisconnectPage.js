import React from 'react'
import { Navigate } from 'react-router-dom';

export default function DisconnectPage() {
    
    const removeToken = () => window.localStorage.removeItem('token');

    removeToken();

  return (
    <Navigate to="/login" replace={true} />
  )
}
