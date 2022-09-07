import styled from 'styled-components';
import Slider from 'react-slick';

export const SliderWrapper = styled.div`
  margin: 0 auto;
  padding: 0px 40px 40px 40px;
  width: 1100px;
`;

export const SlideItem = styled.div`
  color: black;
  line-height: 25px;
  height: 300px;
  position: relative;
  text-align: left;
  background-color: pink;
  margin: 10px;
  display: flex;
  flex-direction: column;

  .thumbnailImg {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    padding: 0 15px;
    margin-top: 20px;
  }
  .postTitle {
    height: 55px;
    width: 85%;
    margin-left: 20px;
  }
`;

export const StyledSlider = styled(Slider)`
  height: 600px;
  width: 100%;
  position: relative;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-slide div {
    cursor: pointer;
  }
`;
export const Div = styled.div`
  position: absolute;
  right: 100px;
  img {
    width: 60px;
    padding: 10px;
  }
`;
export const DivPre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 50px;
  z-index: 99;
  text-align: left;
  line-height: 30px;
  img {
    width: 60px;
    padding: 10px;
  }
`;
export const Thumnail = styled.div``;
