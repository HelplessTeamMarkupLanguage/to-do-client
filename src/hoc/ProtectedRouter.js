import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const protectedRoute = ({ isAuth, component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (isAuth ? <Component {...props} /> : <Redirect to="/" />)} />
);

export default protectedRoute;
