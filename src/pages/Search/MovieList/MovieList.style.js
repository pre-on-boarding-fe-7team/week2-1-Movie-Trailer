import { ImageList } from '@mui/material';
import styled from 'styled-components';

export const MovieImageList = styled(ImageList)`
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)) !important;
`;
