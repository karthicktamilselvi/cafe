// src/services/api.js
import axios from 'axios';

// Create a custom axios instance with default config
const api = axios.create({
  baseURL: 'https://api.dev.fastplay.in',
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
    // You can add other default headers here
  },
});

// Request interceptor for API calls
api.interceptors.request.use(
  async (config) => {
    // You can modify the request config here (e.g., add auth token)
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for API calls
api.interceptors.response.use(
  (response) => response.data, // Simply return the data from the response
  (error) => {
    // Handle errors globally
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('API Error:', error.response.status, error.response.data);
      
      // Handle specific status codes
      if (error.response.status === 401) {
        // Handle unauthorized access (e.g., redirect to login)
        window.location.href = '/login';
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error('API Error: No response received', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('API Error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default api;