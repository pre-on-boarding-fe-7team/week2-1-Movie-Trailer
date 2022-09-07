import { ImageList, Container as MuiContainer } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(MuiContainer)`
  height: 100%;
`;

export const MovieImageList = styled(ImageList)`
  width: 100%;
  height: 100%;
  msoverflowstyle: 'none';

  &::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }
`;
