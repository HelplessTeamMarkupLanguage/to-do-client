import './App.scss';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import React from 'react';
import { Suspense } from 'react';
import ProtectedRoute from './hoc/ProtectedRouter';

const ToDoList = React.lazy(() => {
  return import('./containers/ToDoList/ToDoList');
});

function App() {
  let routes = (
    <Switch>
      <ProtectedRoute path="/" exact component={ToDoList} isAuth={true} />
      <Redirect to="/" />
    </Switch>
  );
  return <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>;
}

export default withRouter(App);
