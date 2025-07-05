import axios from 'axios';

const api = axios.create({
  baseURL: 'http://locahost:8000/api',
});

export default api;
