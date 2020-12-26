import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import React from 'react';
import { Suspense } from 'react';
import ProtectedRoute from './hoc/ProtectedRouter';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import Layout from './hoc/Layout';

const ToDoList = React.lazy(() => {
  return import('./containers/ToDoList/ToDoList');
});

const SettingsPage = React.lazy(() => {
  return import('./containers/SettingsPage/SettingsPage');
});

const LoginPage = React.lazy(() => {
  return import('./containers/LoginPage/LoginPage');
});

const RegistrationPage = React.lazy(() => {
  return import('./containers/RegistrationPage/RegistrationPage');
});

function App() {
  const token = localStorage.getItem('token');

  const authorizationRoutes = (
    <Suspense fallback={<LoadingSpinner text="Just A Second" />}>
      <Switch>
        <Route path="/registration" exact component={RegistrationPage} />{' '}
        <Route path="/login" exact component={LoginPage} />
        <Redirect to="/login" />
      </Switch>
    </Suspense>
  );

  const authorizedRoutes = (
    <Layout>
      <Suspense fallback={<LoadingSpinner text="Just A Second" />}>
        <Switch>
          <ProtectedRoute path="/todos" exact component={ToDoList} token={token} />
          <ProtectedRoute path="/settings" exact component={SettingsPage} token={token} />
          <Redirect to="/todos" />
        </Switch>
      </Suspense>
    </Layout>
  );
  return token ? authorizedRoutes : authorizationRoutes;
}

export default withRouter(App);
