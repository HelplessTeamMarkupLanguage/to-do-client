import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://to-do-798.herokuapp.com/',
});

export default instance;
