import React from 'react';
import useInfiniteScroll from '../../common/hooks/useInfiniteScroll';
import { Container } from './Main.style';
import { getMoviePopular } from '../../api/api';
import Slider from './Slider/Slider';

function Main() {
  const [data, status] = useInfiniteScroll(getMoviePopular);
  console.info(data);
  if (status === 'loading') {
    return <>loading...</>;
  }

  if (status === 'error') {
    return alert('error');
  }

  return (
    <Container>
      <div>Popular In Theaters</div>
      <Slider data={data} />
    </Container>
  );
}

export default Main;
