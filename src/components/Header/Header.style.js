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
      position: relative;
      color: ${props => props.theme.colors.yellow};
      font-weight: 600;
    }
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1px;
      bottom: 0;
      left: 0;
      background: ${props => props.theme.colors.yellow};
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    &.active:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
    &:active {
      color: ${props => props.theme.colors.yellow};
    }
  }
`;
