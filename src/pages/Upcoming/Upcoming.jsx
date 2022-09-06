import React, { Fragment, useEffect, useState } from 'react';
import { get } from '../../api/api';
import { Container } from './Upcoming.style';

function UpComing() {
  const [upcomingMovieList, setUpcomingMovieList] = useState([]);
  useEffect(() => {
    const getMovie = async () => {
      const res = await get(`/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=ko`);
      console.info(res.results);
      setUpcomingMovieList(res.results);
    };
    getMovie();
  }, []);
  return (
    <Container>
      {upcomingMovieList?.map((movie, idx) => (
        <Fragment key={idx}>
          <div>{movie.title}</div>
          <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
        </Fragment>
      ))}
    </Container>
  );
}

export default UpComing;
