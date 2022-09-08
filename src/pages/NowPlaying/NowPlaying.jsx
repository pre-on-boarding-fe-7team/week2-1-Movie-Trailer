import { getMovieNowPlaying } from '../../api/api';
import useInfiniteScroll from '../../common/hooks/useInfiniteScroll';
import MovieList from '../../components/MovieList/MovieList.jsx';
import Loading from '../../common/utils/loading';
import { Container } from './NowPlaying.style.js';
import { useLocation } from 'react-router-dom';

const NowPlaying = () => {
  const pathName = useLocation().pathname;
  const pathRoute = pathName.split('/')[2];
  const [data, status] = useInfiniteScroll(getMovieNowPlaying);

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
};

export default NowPlaying;
