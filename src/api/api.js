import axios from 'axios';
const baseUrl = process.env.REACT_APP_SERVER_URL;

const get = async endpoint => {
  const url = baseUrl + endpoint;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  if (!res.ok) {
    throw new Error(`${res.status.toString()} Error 인한 요청 실패!`);
  }
  return await res.json();
};

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


const getMovieTopRated = async id => {
  const response = await httpClient.get(`/top_rated`);
  return response.data.results;
};

export { get, getMovieDetail, getMovieVideo, getMovieTopRated };
