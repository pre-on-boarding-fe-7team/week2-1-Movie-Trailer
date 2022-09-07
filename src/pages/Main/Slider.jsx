import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { SliderWrapper, SlideItem, Thumnail } from './Slider.style';

function Sliders({ videos }) {
  const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/w300';
  const settings = {
    infinite: true,
    slidesToShow: 5.5,
    speed: 800,
    slidesToScroll: 4,
  };
  useEffect(() => {});
  // const calculateRateStar = () => {
  //   const width = 24 * rate; //rate는 number형 별점. ex) 4.2 2.8 등
  //   setCalRate(`${width}px`);
  // };

  const videoItems = videos.map(movie => {
    return (
      <div key={movie.id}>
        <SlideItem>
          <Thumnail>
            <img className="thumbnailImg" src={IMAGE_BASE_URL + `${movie.backdrop_path}`}></img>
          </Thumnail>
          <div className="postTitle">
            <p>{movie.title}</p>
            <p>{movie.vote_average}</p>
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
      <style>{cssstyle}</style>
      <Slider {...settings}>{videoItems}</Slider>
    </SliderWrapper>
  );
}

export default Sliders;

const cssstyle = `

.slick-next:before, .slick-prev:before {
    color: #000;
}
.center .slick-center h3 {
    color: #e67e22;
    opacity: 1;
    -ms-transform: scale(1.08);
    transform: scale(1.08);
}
.center h3 {
    transition: all .3s ease;
}
`;
