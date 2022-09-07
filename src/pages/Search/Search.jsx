import { ImageListItem, ImageListItemBar } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';

import { getSearchMovie } from '../../api/api.js';
import { getImage } from '../../common/utils/image.js';
import { Bold, Box, MovieImageList, Title } from './Search.style.js';
import Star from './Star/Star.jsx';

const Search = () => {
  const { state } = useLocation();
  const query = state ? state.query : '';

  const { data: searchMovie, status } = useQuery('searchMovie', () => getSearchMovie(query));

  if (status === 'loading') {
    return <>loading...</>;
  }

  if (status === 'error') {
    return alert('error');
  }

  return (
    <Box>
      {searchMovie?.length > 0 ? (
        <>
          <Title variant="h6">
            "<Bold>{query}</Bold>"에 대한 검색 결과
          </Title>
          <MovieImageList cols={5} gap={8}>
            {searchMovie?.map(({ id, title, vote_average, poster_path }) => (
              <ImageListItem key={id}>
                <img src={getImage(poster_path)} alt={title} loading="lazy" />
                <ImageListItemBar title={title} subtitle={<Star value={vote_average / 2} />} />
              </ImageListItem>
            ))}
          </MovieImageList>
        </>
      ) : (
        <p>입력하신 "{query}"에 대한 검색 결과가 없습니다.</p>
      )}
    </Box>
  );
};

export default Search;
