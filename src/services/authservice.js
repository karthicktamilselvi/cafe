// src/services/authService.js
import api from './api';

const AuthService = {
  login: async (postData) => {
    let date = new Date().getTime()
    return api.post(`exchange/auth/login?t=${date}`, postData);
  },

  register: async (userData) => {
    return api.post('/auth/register', userData);
  },

  getCurrentUser: async () => {
    return api.get('/auth/me');
  },

  logout: async () => {
    return api.post('/auth/logout');
  },
};

export default AuthService;