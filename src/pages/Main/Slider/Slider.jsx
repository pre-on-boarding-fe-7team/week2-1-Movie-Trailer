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
  // Rate,
  Title,
} from '../Slider/Slider.style';
import Star from '../../../components/Star/Star';
import { ImageListItemBar } from '@mui/material';

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
        <img src={nextIcon} alt="다음 버튼" />
      </Div>
    ),
    prevArrow: (
      <DivPre>
        <img src={prevIcon} alt="이전 버튼" />
      </DivPre>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const videoItems = data.pages[0].results?.map(movie => {
    return (
      <div key={movie.id}>
        <Link to={`${ROUTE.MOVIE}/${movie.id}`}>
          <SlideItem>
            <Thumnail>
              <img
                className="thumbnailImg"
                src={IMAGE_BASE_URL + `${movie.backdrop_path}`}
                alt={movie.title}
              ></img>
            </Thumnail>
            <div className="postTitle">
              <ImageListItemBar
                title={movie.title}
                subtitle={<Star value={movie.vote_average / 2} />}
              />
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
