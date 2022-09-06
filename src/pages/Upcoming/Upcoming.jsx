import React, { Fragment, useEffect, useState } from 'react';
import { get } from '../../api/api';
import { Container } from './Upcoming.style';

function UpComing() {
  const [upcomingMovieList, setUpcomingMovieList] = useState([]);
  const [movieSrc, setMovieSrc] = useState('');
  useEffect(() => {
    const getMovie = async () => {
      const res = await get(`/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=ko`);
      setUpcomingMovieList(res.results);
      console.info(res.results);
      const movie = await get(
        `/movie/${539681}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=ko`
      );
      console.info(movie.results);
      setMovieSrc(movie.results[0].key);
    };
    getMovie();
  }, []);
  return (
    <Container>
      {upcomingMovieList?.map((movie, idx) => (
        <Fragment key={idx}>
          <div>{movie.title}</div>
          <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
          <a href={`https://www.youtube.com/watch?v=${movieSrc}`}>여기로 가세요</a>
          <p>{movieSrc}</p>
        </Fragment>
      ))}
    </Container>
  );
}

export default UpComing;
