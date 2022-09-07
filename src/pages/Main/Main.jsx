// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from './Main.style';
import VieodList from './videoList';
function Main() {
  const API_URL = 'https://api.themoviedb.org/3';
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(`${API_URL}/movie/popular?api_key=f57efe3dc1a886a3611eff7cabe98a90`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.results))
      .catch(error => console.info('error', error));
  }, []);

  console.info(videos);

  return (
    <Container>
      <VieodList videos={videos} />
    </Container>
  );
}

export default Main;
