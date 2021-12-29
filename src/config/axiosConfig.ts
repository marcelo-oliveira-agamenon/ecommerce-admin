import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
});

api.interceptors.request.use(async (config) => {
  const token = `Bearer ${localStorage.getItem('grab-and-cash-token') as string}`;

  if (token) {
    config.headers.Authorization = token; // eslint-disable-line no-param-reassign
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
      window.location.href = '/';
    }

    return error;
  },
);

export default api;
