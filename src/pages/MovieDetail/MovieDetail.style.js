import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  z-index: 0;
  width: 100%;
  height: 100%;
  position: relative;
  margin-bottom: 3rem;
  /* border: 2px solid green; */
  padding-right: 3rem;
`;

export const Background = styled.img`
  opacity: 0.4;
  width: 100%;
  justify-content: end;
  height: 80vh;
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
`;

export const InfoDiv = styled.div`
  z-index: 2;
  /* border: 2px solid red; */
  background-color: transparent;
  width: 50%;
  height: 30rem;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Div = styled.div`
  font-size: ${props =>
    props.title ? props.theme.fontSizes.titleSize : props.theme.fontSizes.base};
  font-weight: ${props => (props.title ? 'bold' : 'normal')};
  margin: 1rem;
`;

export const Video = styled.iframe`
  z-index: 2;
  margin-top: 32rem;
`;

export const Poster = styled.img`
  z-index: 2;
  width: 200px;
  justify-content: end;
  margin-top: ${props => (props.video ? '18rem' : '2rem')};
  margin-right: 1rem;
`;

export const Overview = styled.div`
  display: flex;
  align-items: flex-end;
  /* border: 2px solid blue; */
`;
