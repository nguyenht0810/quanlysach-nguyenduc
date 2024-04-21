// services/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000', // Địa chỉ của backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
