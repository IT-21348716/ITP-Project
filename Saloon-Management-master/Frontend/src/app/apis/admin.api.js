import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_API;

const requestConfigJson = {
  headers: {
    "x-auth-token": localStorage.getItem('x-auth-token'),
    'Content-type': 'application/json',
  },
};

export const USERAPI = {
  login: (userCredentials) => axios.post(`${BASE_URL}/api/admin/login`, userCredentials),
  register: (userDetails) => axios.post(`${BASE_URL}/api/admin/register`, userDetails),
  getAdmin: () => axios.get(`${BASE_URL}/api/admin`, requestConfigJson),
};