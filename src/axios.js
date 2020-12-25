import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:8080',
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.common['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default instance;
