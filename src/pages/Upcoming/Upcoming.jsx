import React from 'react';
import { useQuery } from 'react-query';
import { getUpcomingMovies } from '../../api/api';
import { Container } from './Upcoming.style';

function UpComing() {
  const { data: UpcomingMovies, status } = useQuery('UpcomingMovies', () => getUpcomingMovies());

  if (status === 'loading') {
    return <>loading...</>;
  }

  if (status === 'error') {
    return alert('error');
  }

  return (
    <Container>
      {UpcomingMovies?.map((movie, idx) => (
        <div key={idx}>
          <div>{movie.title}</div>
          <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
        </div>
      ))}
    </Container>
  );
}

export default UpComing;
