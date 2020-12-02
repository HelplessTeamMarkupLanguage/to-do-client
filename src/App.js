import './App.scss';
import axios from 'axios';

import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import ToDoList from './containers/ToDoList/ToDoList';
import { Suspense } from 'react';

/* function asd() {
  axios
    .get('http://localhost:8080/todo')
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
}
 */
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
