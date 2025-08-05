import axios from 'axios';

// Define your base URLs for different types
const BASE_URLS = {
  cms: 'https://cms-api.dev.fastplay.in',
  default: 'https://api.dev.fastplay.in'
};

// Create a custom axios instance with default config
const api = axios.create({
  baseURL: BASE_URLS.default,
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for API calls
api.interceptors.request.use(
  async (config) => {
    // Check if type is specified in the config
    if (config.type) {
      console.log(config.type)
      config.baseURL = BASE_URLS[config.type] || BASE_URLS.default;
      // Remove the type from config to avoid confusion
      delete config.type;
    }
    
    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor remains the same
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      console.error('API Error:', error.response.status, error.response.data);
      
      if (error.response.status === 401) {
        window.location.href = '/login';
      }
    } else if (error.request) {
      console.error('API Error: No response received', error.request);
    } else {
      console.error('API Error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default api;