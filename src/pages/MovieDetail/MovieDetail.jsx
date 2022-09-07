import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Background, Section, InfoDiv, Video, Poster } from './MovieDetail.style';
import { CircularProgress } from '@mui/material';
import { getMovieDetail, getMovieVideo } from '../../api/api';

const MovieDetail = () => {
  const { id } = useParams();

  // const results = useQueries([
  //   { queryKey: 'movieDetail', queryFn: getMovieDetail },
  //   { queryKey: 'movieVideo', queryFn: getMovieVideo },
  // ]);

  const { isLoading: detailLoading, data: movieDetail } = useQuery('movieDetail', () =>
    getMovieDetail(id)
  );

  const { isLoading: videoLoading, data: movieVideo } = useQuery('movieVideo', () =>
    getMovieVideo(id)
  );

  if ((detailLoading || videoLoading) === true) {
    return (
      <div style={{ backgroundColor: 'black', width: '100vw', height: '100vh', color: 'white' }}>
        <CircularProgress />
        Loading...
      </div>
    );
  }

  return (
    <Section>
      <div>
        <Background
          src={`${process.env.REACT_APP_IMG_URL}/original/${movieDetail.backdrop_path}`}
          alt="back_img"
        />
        <InfoDiv>
          <div>제목 : {movieDetail.original_title}</div>
          <div>별점 : {movieDetail.vote_average} / 10</div>
          <div>제작연도 : {movieDetail.release_date.split('-')[0]}</div>
          <div>
            장르 :
            {movieDetail.genres.map(i => (
              <span key={i.name}> {i.name}</span>
            ))}
          </div>
        </InfoDiv>
      </div>

      <div>
        {movieVideo && (
          <Video
            title={movieDetail.original_title}
            id="ytplayer"
            type="text/html"
            width="720"
            height="405"
            src={`https://www.youtube.com/embed/${movieVideo}?autoplay=1&mute=1`}
            frameBorder="0"
            allowFullScreen
          ></Video>
        )}

        <div style={{ color: 'white', marginLeft: '20rem', marginTop: '2rem' }}>
          {movieDetail.overview}
        </div>
      </div>

      <Poster
        src={`${process.env.REACT_APP_IMG_URL}/original/${movieDetail.poster_path}`}
        alt="poster_img"
      />
    </Section>
  );
};

export default MovieDetail;
