import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import ToDoList from './containers/ToDoList/ToDoList';
import { Suspense } from 'react';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import LoginPage from './containers/LoginPage/LoginPage';

function App() {
  let routes = (
    <>
      <LoginPage />
      <Switch>
        <Route path="/" exact component={ToDoList}></Route>
        <Redirect to="/" />
      </Switch>
    </>
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
