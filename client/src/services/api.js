import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const generateHook = async (data) => {
  return axios.post(`${API_URL}/generate-hook`, data);
};

export const generateScript = async (data) => {
  return axios.post(`${API_URL}/generate-script`, data);
};

export const generateCaption = async (data) => {
  return axios.post(`${API_URL}/generate-caption`, data);
};

export const generateCta = async (data) => {
  return axios.post(`${API_URL}/generate-cta`, data);
};
