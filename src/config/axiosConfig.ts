import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ecommerce-go.herokuapp.com',
});

api.interceptors.request.use(async (config) => {
  const token = `Bearer ${localStorage.getItem('grab-and-cash-token') as string}`;

  if (token) {
    config.headers.Authorization = token; // eslint-disable-line no-param-reassign
  }

  return config;
});

export default api;
