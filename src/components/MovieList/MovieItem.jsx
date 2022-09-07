import { ImageListItemBar } from '@mui/material';
import { getImage } from '../../common/utils/image';
import Star from '../Star/Star';
import { MovieImage, MovieImageListItem } from './MovieItem.style';

const MovieItem = ({ title, vote_average, poster_path }) => {
  return (
    <MovieImageListItem>
      <MovieImage src={getImage(poster_path)} alt={title} loading="lazy" />
      <ImageListItemBar title={title} subtitle={<Star value={vote_average / 2} />} />
    </MovieImageListItem>
  );
};

export default MovieItem;
