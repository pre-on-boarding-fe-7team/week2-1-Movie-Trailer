// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from './Main.style';
import VieodList from './videoList';
function Main() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=f57efe3dc1a886a3611eff7cabe98a90',
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.results))
      .catch(error => console.info('error', error));
  }, []);

  console.info(videos);

  return (
    <Container>
      This is MainPage
      <VieodList videos={videos} />
    </Container>
  );
}

export default Main;
