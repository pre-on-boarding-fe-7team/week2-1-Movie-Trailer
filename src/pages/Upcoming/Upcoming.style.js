import { Container as MuiContainer } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(MuiContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: gainsboro;
  padding: 2rem;
`;
