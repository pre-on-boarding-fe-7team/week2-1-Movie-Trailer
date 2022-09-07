import { useQuery } from 'react-query';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { getMovieTopRated } from '../../api/api';
import TopRated from './TopRated';
import { Ul } from './TopRatedList.style.js';

export default function TopRatedList() {
  const { isLoading: detailLoading, data: TopRatedList } = useQuery('TopRatedList', () =>
    getMovieTopRated()
  );

  if (detailLoading === true) {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={detailLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <>
      <Ul>
        {TopRatedList.map(movie => {
          return (
            <TopRated
              key={movie.id}
              title={movie.title}
              posterImg={movie.poster_path}
              average={movie.vote_average}
            />
          );
        })}
      </Ul>
    </>
  );
}
