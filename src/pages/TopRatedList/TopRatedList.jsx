import { useQuery } from 'react-query';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { getMovieTopRated } from '../../api/api';
import TopRated from './TopRated';
import { Container, Ul } from './TopRatedList.style.js';

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

  return (
    <Container>
      <Ul>
        {TopRatedList?.map(movie => {
          return (
            <TopRated
              key={movie.id}
              title={movie.title}
              posterImg={movie.poster_path}
              average={movie.vote_average}
              date={movie.release_date}
            />
          );
        })}
      </Ul>
    </Container>
  );
}
