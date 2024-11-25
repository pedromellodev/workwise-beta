// src/utils/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5173', // Ajuste para a URL do seu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
