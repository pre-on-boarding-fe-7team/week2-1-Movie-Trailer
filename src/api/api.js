import axios from 'axios';

const httpClient = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/movie`,
  params: { api_key: process.env.REACT_APP_API_KEY },
});

const getMovieDetail = async id => {
  const response = await httpClient.get(`${id}`, {
    params: {
      language: 'en-US',
    },
  });
  return response.data;
};

const getMovieVideo = async id => {
  const response = await httpClient.get(`${id}/videos`);
  return response.data.results[0].key;
};

export { getMovieDetail, getMovieVideo };
