import { Box as MuiBox } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(MuiBox)`
  background: ${props => props.theme.colors.black};
  padding: 40px 20px;
`;
