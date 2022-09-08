import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  params: { api_key: process.env.REACT_APP_API_KEY, language: 'ko' },
});

const getMovieDetail = async id => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};

const getMovieVideo = async id => {
  const response = await api.get(`/movie/${id}/videos`);
  return response.data.results;
};

const getMovieTopRated = async query => {
  const response = await api.get(`/movie/top_rated`, { params: { page: query } });
  return response.data;
};

const getMovieNowPlaying = async () => {
  const response = await api.get(`/movie/now_playing`);
  return response.data;
};

const getSearchMovie = async query => {
  const response = await api.get(`/search/movie`, { params: query });
  return response.data;
};

const getUpcomingMovies = async query => {
  const response = await api.get(`/movie/upcoming`, { params: { page: query } });
  return response.data;
};
const getMoviePopular = async () => {
  const response = await api.get(`/movie/popular`);
  return response.data;
};
export {
  getMovieDetail,
  getMovieVideo,
  getMovieTopRated,
  getMovieNowPlaying,
  getSearchMovie,
  getUpcomingMovies,
  getMoviePopular,
};
