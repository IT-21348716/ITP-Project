import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_API;

const requestConfigJson = {
  headers: {
     "x-auth-token": localStorage.getItem('x-auth-token'),
    'Content-type': 'application/json',
  },
};

export const USERAPI = {
  login: (userCredentials) => axios.post(`${BASE_URL}/api/user/login`, userCredentials),
  register: (userDetails) => axios.post(`${BASE_URL}/api/user/register`, userDetails),
  addUser: (userDetails) => axios.post(`${BASE_URL}/api/user/add`, userDetails),
  getUser: () => axios.get(`${BASE_URL}/api/user`, requestConfigJson),
  getUsers: () => axios.get(`${BASE_URL}/api/user/all`),
  updateUser: (userId, updateUserDetails) => axios.put(`${BASE_URL}/api/user/edit/${userId}`, updateUserDetails),
  deleteUser: (userId) => axios.delete(`${BASE_URL}/api/user/delete/${userId}`),
};