import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  updateProfile: (data) => api.put('/auth/profile', data)
};

export const diary = {
  createEntry: (entry) => api.post('/diary', entry),
  getEntries: () => api.get('/diary'),
  deleteEntry: (id) => api.delete(`/diary/${id}`)
};
