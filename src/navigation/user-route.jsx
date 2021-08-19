import React from 'react';
import { Route } from 'react-router-dom';
import { useAuth } from '../hooks';
import LoadingToRedirect from './loading-to-redirect';

const UserRoute = ({ children, ...rest }) => {
  const { user } = useAuth();

  return user && user?.token ? <Route {...rest} /> : <LoadingToRedirect />;
};

export default UserRoute;
