import { Rating as MuiRating } from '@mui/material';
import styled from 'styled-components';

export const Rating = styled(MuiRating)`
  color: ${props => props.theme.colors.yellow};
`;
