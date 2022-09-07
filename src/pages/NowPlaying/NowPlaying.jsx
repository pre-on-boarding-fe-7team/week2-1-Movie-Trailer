import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { apis } from '../../api/api';
import { Tabs, Tab, Box } from '@mui/material';
import { Container, Img, MovieList } from './NowPlaying.style';

const NowPlaying = () => {
  const [category, setCategory] = useState('');
  const handleChange = (e, value) => {
    setCategory(value);
  };

  // 리액트 쿼리
  const GetMoviesData = async () => {
    const response = await apis.getMovies();
    return response.data;
  };

  const { data: Movies_data, status } = useQuery(['Movies_data'], GetMoviesData, {
    // refetchOnWindowFocus: false,
    // retry: 0,
    onSuccess: Movies_data => {
      console.info(Movies_data);
    },
  });

  if (status === 'loading') {
    return <>loading...</>;
  }

  if (status === 'error') {
    return alert('error');
  }

  return (
    <Container>
      <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
        <Tabs value={category} onChange={handleChange} centered>
          <Tab value="별점 순" label="별점 순" />
          <Tab value="현재 상영중" label="현재 상영중" />
          <Tab value="개봉 예정 영화" label="개봉 예정 영화" />
        </Tabs>
      </Box>
      <MovieList>
        {Movies_data?.results.map(value => {
          return (
            <div key={value.id}>
              <Img src={`${process.env.REACT_APP_IMAGE_URL}${value.poster_path}`} alt="사진" />
            </div>
          );
        })}
      </MovieList>
    </Container>
  );
};

export default NowPlaying;
