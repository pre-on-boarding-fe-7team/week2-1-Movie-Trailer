import { ImageList } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  ${props => props.theme.common.flexCenter};
  margin-bottom: 12px;
`;

export const MovieImageList = styled(ImageList)`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)) !important;
  grid-gap: ${props => props.theme.paddings.xl};
`;
