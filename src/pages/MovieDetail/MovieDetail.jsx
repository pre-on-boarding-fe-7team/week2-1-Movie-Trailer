import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';

const MovieDetail = () => {
  const { id } = useParams();

  const httpClient = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/movie`,
    params: { api_key: process.env.REACT_APP_API_KEY },
  });

  const getMoviedata = async () => {
    const response = await httpClient.get(`${id}`, {
      params: {
        language: 'en-US',
      },
    });
    return response.data;
  };

  const { status, data, error } = useQuery('movieDetail', getMoviedata);
  if (status === 'loading') {
    return <span>Loading...</span>;
  }
  if (status === 'error') {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <button>hi</button>
      <div>비디오 있는 경우, 페이지 진입 시 자동으로 비디오 플레이</div>
      <div>제목, 포스터, 별점, 제작 연도, 장르/ 539681</div>
      <img src={`${process.env.REACT_APP_IMG_URL}/w500/${data.poster_path}`} alt="poster_img" />
      <div>제목 : {data.original_title}</div>
      <div>별점 : {data.vote_average}</div>
      <div>제작연도 : {data.release_date.split('-')[0]}</div>
      <div>
        장르 :
        {data.genres.map(i => (
          <span key={i.name}> {i.name}</span>
        ))}
      </div>
    </>
  );
};

export default MovieDetail;
