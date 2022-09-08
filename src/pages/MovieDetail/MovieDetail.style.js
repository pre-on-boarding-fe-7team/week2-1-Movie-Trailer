import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Section = styled.section`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1600px;
  height: 100%;
  position: relative;
  margin-bottom: 3rem;
  padding: 1rem 2rem 1rem 0;
`;

export const Background = styled.img`
  opacity: 0.4;
  width: 100%;
  /* height: 80vh; */
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
`;

export const InfoDiv = styled.div`
  /* border: 2px solid red; */
  background-color: transparent;
  width: 50%;
  height: 30rem;
  top: 0;
  left: 0;
`;

export const Div = styled.div`
  /* border: 2px solid pink; */
  font-size: ${props =>
    props.title ? props.theme.fontSizes.titleSize : props.theme.fontSizes.base};
  font-weight: ${props => (props.title ? 'bold' : 'normal')};
  margin: 1rem;
  width: ${props => (props.title ? null : '30rem')};
  line-height: ${props => (props.title ? null : '1.4rem')};
`;

export const Video = styled.iframe`
  margin-top: 10rem;
`;

export const Overview = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  margin-top: ${props => (props.video ? '-8rem' : '2rem')};
`;

export const Poster = styled.img`
  width: 200px;
  justify-content: end;
`;
