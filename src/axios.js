import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://to-do-server1.herokuapp.com/',
});

export default instance;
