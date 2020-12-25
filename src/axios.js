import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://to-do-798.herokuapp.com/',
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.common['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default instance;
