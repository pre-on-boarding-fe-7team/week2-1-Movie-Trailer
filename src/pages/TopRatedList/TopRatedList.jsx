import { useQuery } from 'react-query';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { getMovieTopRated } from '../../api/api';
import MovieList from '../../components/MovieList/MovieList.jsx';
import { Container } from './TopRatedList.style.js';

export default function TopRatedList() {
  const { data: TopRatedList, status } = useQuery('TopRatedList', () => getMovieTopRated());

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

  return <Container>{TopRatedList?.length > 0 && <MovieList movies={TopRatedList} />}</Container>;
}
