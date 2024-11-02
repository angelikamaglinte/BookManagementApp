import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component }) => {
  const token = localStorage.getItem('token'); // get token in local storage

  if (!token) {
    // if no token is found, redirect to the login page
    return <Navigate to="/" />;
  }

  // if token exists, render the protected component
  return <Component />;
};

export default ProtectedRoute;