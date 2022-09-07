import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import {
  Container,
  Background,
  Section,
  InfoDiv,
  Video,
  Div,
  Poster,
  Overview,
} from './MovieDetail.style';
import { getMovieDetail, getMovieVideo } from '../../api/api';
import Loading from '../../common/utils/loading';
import { getImage } from '../../common/utils/image';

const MovieDetail = () => {
  const { id } = useParams();

  const { data: movieDetail, isLoading: detailLoading } = useQuery('movieDetail', () =>
    getMovieDetail(id)
  );
  const { data: movieVideo, isLoading: videoLoading } = useQuery('movieVideo', () =>
    getMovieVideo(id)
  );

  if ((detailLoading || videoLoading) === true) {
    return Loading;
  }

  return (
    <Container>
      <Section>
        <div>
          {movieDetail.backdrop_path && (
            <Background
              src={`${process.env.REACT_APP_IMAGE_URL}/original/${movieDetail?.backdrop_path}`}
              alt="back_img"
            />
          )}
        </div>

        <InfoDiv>
          <Div title="true">{movieDetail?.original_title}</Div>
          <Div>{movieDetail?.vote_average} / 10</Div>
          <Div>{movieDetail?.release_date.split('-')[0]}</Div>
          <Div>
            {movieDetail?.genres.map(i => (
              <span key={i.name}> {i.name}</span>
            ))}
          </Div>
        </InfoDiv>

        {movieVideo.length >= 1 && (
          <Video
            title={movieDetail?.original_title}
            id="ytplayer"
            type="text/html"
            width="720"
            height="405"
            src={`https://www.youtube.com/embed/${movieVideo[0].key}?autoplay=1&mute=1`}
            frameBorder="0"
            allowFullScreen
          ></Video>
        )}

        <Overview video={movieVideo.length < 1}>
          <Div>{movieDetail.overview}</Div>
          💫
          <Poster src={getImage(movieDetail?.poster_path)} alt="poster_img" />
        </Overview>
      </Section>
    </Container>
  );
};

export default MovieDetail;
