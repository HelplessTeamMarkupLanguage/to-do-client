import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import React from 'react';
import { Suspense } from 'react';
import ProtectedRoute from './hoc/ProtectedRouter';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

const ToDoList = React.lazy(() => {
  return import('./containers/ToDoList/ToDoList');
});

const LoginPage = React.lazy(() => {
  return import('./containers/LoginPage/LoginPage');
});

const RegistrationPage = React.lazy(() => {
  return import('./containers/RegistrationPage/RegistrationPage');
});

function App() {
  const token = localStorage.getItem('token');

  let routes = (
    <Switch>
      <ProtectedRoute path="/todos" exact component={ToDoList} token={token} />
      <Route path="/registration" exact component={RegistrationPage} />
      <Route path="/login" exact component={LoginPage} />
      {token !== null && token !== '' ? <Redirect to="/todos" /> : <Redirect to="/login" />}
    </Switch>
  );
  return (
    <Suspense
      fallback={
        <div>
          <LoadingSpinner text="Just A Second" />
        </div>
      }
    >
      {routes}
    </Suspense>
  );
}

export default withRouter(App);
