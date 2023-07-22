import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_API;

export const OFFERAPI = {
  saveOffer: (data) => axios.post(`${BASE_URL}/api/offers`, data),
  getOffers: () => axios.get(`${BASE_URL}/api/offers`),
  getOfferById: (id) => axios.get(`${BASE_URL}/api/offers/${id}`),
  updateOffer: (id, updateData) => axios.put(`${BASE_URL}/api/offers/${id}`, updateData),
  deleteOffer: (id) => axios.delete(`${BASE_URL}/api/offers/${id}`),
};