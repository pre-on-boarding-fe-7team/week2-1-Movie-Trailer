import styled from 'styled-components';
import { AppBar as MuiAppBar } from '@mui/material';

export const AppBar = styled(MuiAppBar)`
  background-color: ${props => props.theme.colors.purple};
`;
