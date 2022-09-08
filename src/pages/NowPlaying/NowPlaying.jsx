import { getMovieNowPlaying } from '../../api/api';
import useInfiniteScroll from '../../common/hooks/useInfiniteScroll';
import MovieList from '../../components/MovieList/MovieList.jsx';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import { Container } from './NowPlaying.style.js';

const NowPlaying = () => {
  const [data, status] = useInfiniteScroll(getMovieNowPlaying);

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

  return (
    <Container>
      {data?.pages.map(page => {
        return <MovieList key={page.id} movies={page} />;
      })}
    </Container>
  );
};

export default NowPlaying;
