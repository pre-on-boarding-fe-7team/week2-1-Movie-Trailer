import React from 'react';
import { useQuery } from 'react-query';
import { getMovieNowPlaying } from '../../api/api';
import { Container } from './NowPlaying.style.js';
import MovieList from '../../components/MovieList/MovieList.jsx';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const NowPlaying = () => {
  const { data: Movies_data, status } = useQuery('nowPlayingMovieList', () => getMovieNowPlaying());

  if (status === 'loading') {
    return (
      <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  if (status === 'error') {
    return alert('error');
  }

  return <Container>{Movies_data?.length > 0 && <MovieList movies={Movies_data} />}</Container>;
};

export default NowPlaying;
