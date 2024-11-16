import axios from 'axios';

const API = axios.create({
  baseURL: 'https://dragoplan.onrender.com',
});

// Attach token for authenticated requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const registerUser = (userData) => API.post('/auth/register', userData);
export const loginUser = (userData) => API.post('/auth/login', userData);
export const fetchDragodindes = (userId) => API.get(`/dragodindes?userId=${userId}`);
export const createDragodinde = (dragodindeData) => API.post('/dragodindes', dragodindeData);
export const calculateMating = (matingData) => API.post('/dragodindes/mating-calculate', matingData);
