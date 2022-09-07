import { ImageList, Box as MuiBox } from '@mui/material';
import styled from 'styled-components';

export const Box = styled(MuiBox)`
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
