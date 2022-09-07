import axios from 'axios';

/* 기본 api */
const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export const apis = {
  getMovies: () =>
    api.get(`/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`),
};
