import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import ToDoList from './containers/ToDoList/ToDoList';
import { Suspense } from 'react';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import LoginPage from './containers/LoginPage/LoginPage';
import RegistrationPage from './containers/RegistrationPage/RegistrationPage';

function App() {
  let routes = (
    <Switch>
      <Route path="/registration" component={RegistrationPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/" exact component={ToDoList} />
      <Redirect to="/" />
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
