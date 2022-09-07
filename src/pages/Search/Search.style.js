import { ImageList, Box as MuiBox, Typography } from '@mui/material';
import styled from 'styled-components';

export const Box = styled(MuiBox)`
  height: 100%;
  padding: 40px 20px;
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

export const Title = styled(Typography)`
  margin-bottom: 10px;
`;

export const Bold = styled.b`
  font-weight: 600;
`;
