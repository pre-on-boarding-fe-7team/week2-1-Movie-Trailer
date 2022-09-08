import React from 'react';
import useInfiniteScroll from '../../common/hooks/useInfiniteScroll';
import { Container } from './Main.style';
import { getMoviePopular } from '../../api/api';
import Slider from './Slider/Slider';
import Loading from '../../common/utils/loading';
import MovieList from '../../components/MovieList/MovieList.jsx';
function Main() {
  const [data, status] = useInfiniteScroll(getMoviePopular);

  if (status === 'loading') {
    return Loading;
  }

  if (status === 'error') {
    return alert('error');
  }

  return (
    <Container>
      <Slider data={data} />
      {data?.pages.map(page => {
        return <MovieList key={page.id} movies={page} />;
      })}
    </Container>
  );
}

export default Main;
