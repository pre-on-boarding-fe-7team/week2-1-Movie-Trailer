import { ImageListItem } from '@mui/material';
import styled from 'styled-components';

export const MovieImageListItem = styled(ImageListItem)`
  cursor: pointer;
`;

export const MovieImage = styled.img`
  transition: 0.5s ease;
  &:hover {
    opacity: 0.3;
  }
`;
