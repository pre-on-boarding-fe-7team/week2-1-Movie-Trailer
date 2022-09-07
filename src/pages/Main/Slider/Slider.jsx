import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import nextIcon from '../assets/next.png';
import prevIcon from '../assets/prev.png';
import {
  SliderWrapper,
  SlideItem,
  Thumnail,
  Div,
  DivPre,
  StyledSlider,
} from '../Slider/Slider.style';

function Sliders({ GetMoviePopular }) {
  const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/w300';
  const settings = {
    // infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    rows: 2,
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

  const videoItems = GetMoviePopular.map(movie => {
    return (
      <div key={movie.id}>
        <SlideItem>
          <Thumnail>
            <img className="thumbnailImg" src={IMAGE_BASE_URL + `${movie.backdrop_path}`}></img>
          </Thumnail>
          <div className="postTitle">
            <p>{movie.title}</p>
            <p>평점 : {movie.vote_average}</p>
          </div>
        </SlideItem>
      </div>
    );
  });
  return (
    <SliderWrapper>
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
