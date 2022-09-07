import styled from 'styled-components';

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: ${({ theme }) => theme.paddings.xl};
`;
