import axios from 'axios';

const api = (limit = 20, page = 1) => {
  return axios.create({
    baseURL: import.meta.env.VITE_BASE_URL, // Берем из .env
    timeout: 10000, // Таймаут запросов (по желанию)
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      limit,
      page,
    },
  });
};
export default api;
