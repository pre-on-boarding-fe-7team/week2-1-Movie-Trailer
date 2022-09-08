import React from 'react';
import useInfiniteScroll from '../../common/hooks/useInfiniteScroll';
import { Container } from './Main.style';
import { getMoviePopular } from '../../api/api';
import Slider from './Slider/Slider';
import MovieList from '../../components/MovieList/MovieList.jsx';
function Main() {
  const [data, status] = useInfiniteScroll(getMoviePopular);

  if (status === 'loading') {
    return <>loading...</>;
  }

  if (status === 'error') {
    return alert('error');
  }

  return (
    <Container>
      <Slider data={data} />
      {data?.pages.map((page, idx) => {
        return <MovieList key={idx} movies={page} />;
      })}
    </Container>
  );
}

export default Main;
