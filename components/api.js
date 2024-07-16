// client/src/components/api.js

import axios from 'axios';

const baseURL = 'http://localhost:5000/api';

// Configuration d'Axios avec baseURL pour simplifier les appels API
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fonction pour gérer l'inscription d'un utilisateur
export const signUp = async (userData) => {
  try {
    const response = await api.post('/auth/signup', userData);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

// Fonction pour gérer la connexion d'un utilisateur
export const signIn = async (email, password) => {
  try {
    const response = await api.post('/auth/signin', { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export default api;
