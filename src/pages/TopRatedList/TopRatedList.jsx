import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import useFetchData from '../../hooks/useFetchData';
import TopRated from './TopRated';
import { Ul } from './TopRatedList.style.js';

export default function TopRatedList() {
  const { data, isLoading } = useFetchData('/movie/top_rated');

  return (
    <>
      {isLoading ? (
        <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <Ul>
          {data.results.map(movie => {
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
      )}
    </>
  );
}
