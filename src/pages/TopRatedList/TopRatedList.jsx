import useInfiniteScroll from '../../common/hooks/useInfiniteScroll';
import { getMovieTopRated } from '../../api/api';
import MovieList from '../../components/MovieList/MovieList.jsx';
import { Container } from './TopRatedList.style.js';
import Loading from '../../common/utils/loading';

export default function TopRatedList() {
  const [data, status] = useInfiniteScroll(getMovieTopRated);

  if (status === 'loading') {
    return Loading;
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
