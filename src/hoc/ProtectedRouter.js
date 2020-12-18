import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const protectedRoute = ({ token, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (token !== null && token !== '' ? <Component {...props} /> : <Redirect to="/" />)}
  />
);

export default protectedRoute;
