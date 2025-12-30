import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: 'https://real-state-bccgbqbaf0edgeg5.canadacentral-01.azurewebsites.net/api', // URL da sua API .NET 8
  //https://real-state-bccgbqbaf0edgeg5.canadacentral-01.azurewebsites.net/api
  //https://localhost:7265/api
});

// Interceptor para injetar o token automaticamente em cada chamada
api.interceptors.request.use((config) => {
  const token = Cookies.get('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;