import React from 'react';
import useInfiniteScroll from '../../common/hooks/useInfiniteScroll';
import { getUpcomingMovies } from '../../api/api';
import MovieList from '../../components/MovieList/MovieList.jsx';
import { Container } from './Upcoming.style';
import Loading from '../../common/utils/loading';

function Upcoming() {
  const [data, status] = useInfiniteScroll(getUpcomingMovies);

  if (status === 'loading') {
    return Loading;
  }

  if (status === 'error') {
    return alert('error');
  }
  return (
    <Container>
      {data?.pages.map((page, idx) => {
        return <MovieList key={idx} movies={page} />;
      })}
    </Container>
  );
}

export default Upcoming;
