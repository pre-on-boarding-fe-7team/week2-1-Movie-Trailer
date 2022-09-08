import useInfiniteScroll from '../../common/hooks/useInfiniteScroll';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { getMovieTopRated } from '../../api/api';
import MovieList from '../../components/MovieList/MovieList.jsx';
import { Container } from './TopRatedList.style.js';

export default function TopRatedList() {
  const [data, status] = useInfiniteScroll(getMovieTopRated);

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
      {data?.pages.map((page, idx) => {
        return <MovieList key={page.id} movies={page} />;
      })}
    </Container>
  );
}
