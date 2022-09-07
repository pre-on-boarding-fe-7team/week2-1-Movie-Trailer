import { ImageListItem } from '@mui/material';
import styled from 'styled-components';

export const MovieImageListItem = styled(ImageListItem)`
  cursor: pointer;
  position: relative;
  height: 0;
  padding-bottom: 148%;
`;

export const MovieImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
  &:hover {
    opacity: 0.3;
  }
`;
