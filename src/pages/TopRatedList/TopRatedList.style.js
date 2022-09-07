import styled from 'styled-components';

export const Container = styled.div`
  ${props => props.theme.common.flexCenter};
  background: ${props => props.theme.colors.black};
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: ${props => props.theme.paddings.xl};
  grid-row-gap: 2rem;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;
