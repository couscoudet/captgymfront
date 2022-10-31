import {
    Routes,
    Route,
    Link,
    Navigate,
    Outlet,
  } from 'react-router-dom';
  
  const PrivateRoute = ({ user, children, redirectPath = '/login' }) => {
    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children;
  };

export default PrivateRoute