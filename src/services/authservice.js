import api from './api';

const AuthService = {
  login: async (postData) => {
    let date = new Date().getTime();
    return api.post(`/exchange/auth/login?t=${date}`, postData);
  },

  getCurrentUser: async () => {
    return api.get('/auth/me', { type: 'cms' });
  },
};

export default AuthService;