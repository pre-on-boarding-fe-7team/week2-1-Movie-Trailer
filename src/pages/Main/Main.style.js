import styled from 'styled-components';
import { Button } from '@mui/material';

export const Container = styled.div`
  width: 100vw;
  max-width: ${props => props.theme.maxWidth};
  min-height: 100vh;
  @media ${({ theme }) => theme.device.mobile} {
    background-color: yellow;
  }
  background-color: cadetblue;
  margin: 0 auto;
`;

export const MyButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border: 0;
  border-radius: 3px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  color: white;
  height: 48px;
  padding: 0 20px;
`;
