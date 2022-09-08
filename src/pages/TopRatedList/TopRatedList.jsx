import useInfiniteScroll from '../../common/hooks/useInfiniteScroll';
import { getMovieTopRated } from '../../api/api';
import MovieList from '../../components/MovieList/MovieList.jsx';
import { Container } from './TopRatedList.style.js';
import Loading from '../../common/utils/loading';
import { useLocation } from 'react-router-dom';

export default function TopRatedList() {
  const pathName = useLocation().pathname;
  const pathRoute = pathName.split('/')[2];
  const [data, status] = useInfiniteScroll(getMovieTopRated);

  if (status === 'loading') {
    return Loading;
  }

  if (status === 'error') {
    return alert('error');
  }

  return (
    <Container>
      {data?.pages.map(page => {
        return <MovieList key={page.id + pathRoute} movies={page} />;
      })}
    </Container>
  );
}
