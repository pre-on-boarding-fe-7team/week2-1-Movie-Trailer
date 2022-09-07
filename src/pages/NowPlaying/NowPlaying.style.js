import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
`;

export const MovieList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  gap: 0.5vw;
  padding-top: 10vh;
`;

export const Img = styled.img`
  width: 19.5vw;
  height: 400px;
`;
