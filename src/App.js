import './App.scss';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import ToDoList from './containers/ToDoList/ToDoList';
import { Suspense } from 'react';

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact component={ToDoList}></Route>
      <Redirect to="/" />
    </Switch>
  );
  return <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>;
}

export default withRouter(App);
