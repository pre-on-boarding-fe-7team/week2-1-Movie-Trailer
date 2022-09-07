import React from 'react';
import { Container } from './Main.style';

import { useQuery } from 'react-query';
import { getMoviePopular } from '../../api/api';
import Slider from './Slider/Slider';

function Main() {
  const { data: GetMoviePopular, status } = useQuery('GetMoviePopular', () => getMoviePopular());

  if (status === 'loading') {
    return <>loading...</>;
  }

  if (status === 'error') {
    return alert('error');
  }

  return (
    <Container>
      <div>Popular In Theaters</div>
      <Slider GetMoviePopular={GetMoviePopular} />
    </Container>
  );
}

export default Main;
