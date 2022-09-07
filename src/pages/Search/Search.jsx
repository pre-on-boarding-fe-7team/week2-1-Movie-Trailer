import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';

import { getSearchMovie } from '../../api/api.js';
import { Bold, Box, Title } from './Search.style.js';
import MovieList from '../../components/MovieList/MovieList.jsx';
import { Backdrop, CircularProgress } from '@mui/material';
import Loading from '../../common/utils/loading.js';

const Search = () => {
  const { state } = useLocation();
  const query = state ? state.query : '';
  const { data: movies, status } = useQuery(['searchMovie', query], () => getSearchMovie(query));

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'error') {
    return alert('error');
  }

  return (
    <Box>
      {movies?.length > 0 ? (
        <>
          <Title variant="h6">
            "<Bold>{query}</Bold>"에 대한 검색 결과
          </Title>
          <MovieList movies={movies} />
        </>
      ) : (
        <p>입력하신 "{query}"에 대한 검색 결과가 없습니다.</p>
      )}
    </Box>
  );
};

export default Search;
