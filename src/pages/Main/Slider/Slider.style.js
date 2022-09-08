import styled from 'styled-components';
import Slider from 'react-slick';

export const SliderWrapper = styled.div`
  margin: 0 auto;
  padding: 0px 40px 40px 40px;
  max-width: 1100px;
  width: 100%;
  height: 400px;
`;

export const SlideItem = styled.div`
  color: white;
  line-height: 25px;
  height: 275px;
  position: relative;
  text-align: left;
  background-color: ${props => props.theme.colors.grey};
  margin: 12px;
  display: flex;
  flex-direction: column;

  .slick-slider {
  }
  .thumbnailImg {
    width: 180px;
    height: 200px;
    margin: 0 auto;
    margin-top: 0px;
  }
  .postTitle {
    color: white;
    font-size: ${props => props.theme.fontSizes.small};
    height: 55px;
    width: 85%;
    text-align: center;
    margin-left: 10px;
  }
`;

export const StyledSlider = styled(Slider)`
  margin-top: 30px;
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
  img {
    position: absolute;
    left: -10px;
    width: 70px;
    bottom: 125px;
    padding: 10px;
  }
`;
export const DivPre = styled.div`
  z-index: 99;
  img {
    position: absolute;
    right: -10px;
    bottom: 125px;
    width: 70px;
    padding: 10px;
  }
`;

export const Rate = styled.span`
  color: ${props => props.theme.colors.purple};
`;

export const Title = styled.span`
  font-size: ${props => props.theme.fontSizes.xxxl};
  color: ${props => props.theme.colors.white};
`;
export const Thumnail = styled.div``;
