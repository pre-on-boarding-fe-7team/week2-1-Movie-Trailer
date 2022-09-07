import React, { Fragment, useState } from 'react';
import { useQuery } from 'react-query';
import { get } from '../../api/api';
import { Container } from './Upcoming.style';

function UpComing() {
  const [upcomingMovieList, setUpcomingMovieList] = useState([]);

  const getUpcomingMovieList = async () => {
    return await get(`/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=ko`);
  };

  useQuery('getUpcomingMovieList', getUpcomingMovieList, {
    onSuccess: data => {
      setUpcomingMovieList(data.results);
    },
    onError: err => {
      console.error(err);
    },
    isLoading: () => {
      return <div>isLoading...</div>;
    },
  });

  return (
    <Container>
      {upcomingMovieList?.map((movie, idx) => (
        <Fragment key={idx}>
          <div>
            <div>{movie.title}</div>
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
          </div>
        </Fragment>
      ))}
    </Container>
  );
}

export default UpComing;
