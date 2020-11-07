import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export default function ProtectedRoute(props) {
  const { isLogged } = useContext(UserContext);

  if (isLogged) return <Route {...props} />;
  return <Navigate to='/login' />;
}
