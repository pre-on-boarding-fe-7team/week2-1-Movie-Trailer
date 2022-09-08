import { useLocation } from 'react-router-dom';

import { getSearchMovie } from '../../api/api.js';
import { Bold, Box, Title } from './Search.style.js';
import MovieList from '../../components/MovieList/MovieList.jsx';
import Loading from '../../common/utils/loading';
import useInfiniteScroll from '../../common/hooks/useInfiniteScroll.js';

const Search = () => {
  const {
    state: { query },
  } = useLocation();
  // const query = state ? state.query : '';

  const [data, status] = useInfiniteScroll(
    pageParam => getSearchMovie({ page: pageParam, query: query }),
    query
  );

  if (status === 'loading') {
    return Loading;
  }

  if (status === 'error') {
    return alert('error');
  }

  return (
    <Box>
      {data ? (
        <>
          <Title variant="h6">
            "<Bold>{query}</Bold>"에 대한 검색 결과
          </Title>
          {data?.pages.map((page, idx) => {
            return <MovieList key={idx} movies={page} />;
          })}
        </>
      ) : (
        <p>입력하신 "{query}"에 대한 검색 결과가 없습니다.</p>
      )}
    </Box>
  );
};

export default Search;
