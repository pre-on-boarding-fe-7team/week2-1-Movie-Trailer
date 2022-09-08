import styled from 'styled-components';
import { AppBar as MuiAppBar } from '@mui/material';

export const AppBar = styled(MuiAppBar)`
  background-color: ${props => props.theme.colors.purple};

  a {
    text-decoration: none;
    padding: 6px 4px;
    margin: 0 8px;
    transition: border 0.2s ease-in-out;
    color: ${props => props.theme.colors.white};

    &.active {
      color: ${props => props.theme.colors.yellow};
      border-bottom: 1px solid ${props => props.theme.colors.yellow};
      padding-bottom: 3px;
      font-weight: 600;
    }
    &:active {
      color: ${props => props.theme.colors.yellow};
    }
  }
`;
