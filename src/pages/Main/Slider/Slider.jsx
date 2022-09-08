import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import nextIcon from '../assets/next.png';
import prevIcon from '../assets/prev.png';
import { ROUTE } from '../../../common/utils/constant';
import Link from '../../../components/Header/Link.style';
import {
  SliderWrapper,
  SlideItem,
  Thumnail,
  Div,
  DivPre,
  StyledSlider,
  Rate,
  Title,
} from '../Slider/Slider.style';

function Sliders({ data }) {
  const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/w300';
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    rows: 1,
    nextArrow: (
      <Div>
        <img src={nextIcon} />
      </Div>
    ),
    prevArrow: (
      <DivPre>
        <img src={prevIcon} />
      </DivPre>
    ),
  };

  const videoItems = data.pages[0].results?.map(movie => {
    return (
      <div key={movie.id}>
        <Link to={`${ROUTE.MOVIE}/${movie.id}`}>
          <SlideItem>
            <Thumnail>
              <img className="thumbnailImg" src={IMAGE_BASE_URL + `${movie.backdrop_path}`}></img>
            </Thumnail>
            <div className="postTitle">
              <p>{movie.title}</p>
              평점 : <Rate> {movie.vote_average}</Rate>
            </div>
          </SlideItem>{' '}
        </Link>
      </div>
    );
  });
  return (
    <SliderWrapper>
      <Title>Popular In Theaters</Title>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <StyledSlider {...settings}>{videoItems}</StyledSlider>
    </SliderWrapper>
  );
}

export default Sliders;
