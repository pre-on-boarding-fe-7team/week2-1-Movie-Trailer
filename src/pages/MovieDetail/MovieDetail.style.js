import styled from 'styled-components';

export const Section = styled.section`
  margin-top: 90px; //header자리
  display: flex;
  flex-direction: column;
  background-color: black;
  z-index: 0;
  width: 100%;
  height: 100%;
  position: relative;
`;
export const Background = styled.img`
  opacity: 0.4;
  width: 80%;
  justify-content: end;
  height: 80vh;
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
`;
export const InfoDiv = styled.div`
  z-index: 2;
  border: 2px solid red;
  background-color: transparent;
  color: white;
  width: 20rem;
  height: 30rem;
  position: absolute;
  top: 0;
  left: 0;
`;
export const Video = styled.iframe`
  z-index: 2;
  margin-top: 40rem;
`;
export const Poster = styled.img`
  z-index: 2;
  width: 200px;
  justify-content: end;
  border: 2px solid blue;
`;
