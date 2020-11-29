import logo from './logo.svg';
import './App.scss';
import { Button } from '@material-ui/core';
import axios from 'axios';

function asd() {
  axios
    .get('http://localhost:8080/todo')
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <Button onClick={() => asd()}>call</Button>
    </div>
  );
}

export default App;
