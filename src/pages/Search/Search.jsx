import { ImageListItem, ImageListItemBar } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { get } from '../../api/api.js';
import { Bold, Box, MovieImageList, Title } from './Search.style.js';
import Star from './Star/Star.jsx';

const Search = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const query = location.state.query;

  useEffect(() => {
    const searchMovies = async () => {
      const url = `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=ko&query=${query}`;
      const res = await get(url);
      setMovies(res.results);
    };
    searchMovies();
  }, [query]);

  return (
    <Box>
      {movies.length > 0 ? (
        <>
          <Title variant="h6">
            "<Bold>{query}</Bold>"에 대한 검색 결과
          </Title>
          <MovieImageList cols={5} gap={8}>
            {movies.map(({ id, title, vote_average, poster_path }) => (
              <ImageListItem key={id}>
                <img
                  src={`${process.env.REACT_APP_IMAGE_URL}${poster_path}`}
                  alt={title}
                  loading="lazy"
                />
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
