import axios from 'axios';

export const api = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_BASE_URL, // Берем из .env
    timeout: 10000, // Таймаут запросов (по желанию)
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getAnimeList = async (
  limit: number = 20,
  page: number = 1,
  order: string,
) => {
  const response = await api().get('/animes', {
    params: {
      limit,
      page,
      order,
    },
  });
  return response.data;
};

export const getAnimeById = async (id: number) => {
  const response = await api().get(`/mangas/${id}`);
  return response.data;
};
export const getAnimeByJenres = async (jenreId: number) => {
  const response = await api().get(`/animes`, {
    params: {
      genre: jenreId,
    },
  });
  return response.data;
};

export const getGenres = async () => {
  const response = await api().get('/genres');
  return response.data;
};
export const getRoles = async (id: number) => {
  const response = await api().get(`/mangas/${id}/roles`);
  return response.data;
};
export const getSimilar = async (id: number) => {
  const response = await api().get(`/mangas/${id}/similar`);
  return response;
};
