import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ecommerce-go.herokuapp.com',
});

export default api;
