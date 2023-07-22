import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_API;

export const TRANSACTIONAPI = {
  saveTransaction: (data) => axios.post(`${BASE_URL}/api/transactions`, data),
  getTransactions: (id) => axios.get(`${BASE_URL}/api/transactions/user/${id}`),
  getTransactionById: (id) => axios.get(`${BASE_URL}/api/transactions/${id}`),
  updateTransaction: (id, updateData) => axios.put(`${BASE_URL}/api/transactions/${id}`, updateData),
  deleteTransaction: (id) => axios.delete(`${BASE_URL}/api/transactions/${id}`),
};