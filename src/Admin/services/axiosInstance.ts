// src/services/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://adotzee-backend.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: interceptors
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    const message =
      error?.response?.data?.message || 'Something went wrong';
    console.error(message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
