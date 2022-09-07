import React from 'react';
import useInfiniteScroll from '../../common/hooks/useInfiniteScroll';
import { Container } from './Upcoming.style';

function Upcoming() {
  const [data, status] = useInfiniteScroll();

  if (status === 'loading') {
    return <>loading...</>;
  }

  if (status === 'error') {
    return alert('error');
  }
  return (
    <Container>
      {data?.pages.map(page =>
        page.results.map((movie, idx) => (
          <div key={idx}>
            <div>{movie.title}</div>
            {movie.poster_path ? (
              <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
            ) : (
              <img src={process.env.PUBLIC_URL + '/image/pika.png'} width="200" />
            )}
          </div>
        ))
      )}
    </Container>
  );
}

export default Upcoming;
