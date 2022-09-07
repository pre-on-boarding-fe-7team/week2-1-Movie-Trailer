import { ImageListItemBar } from '@mui/material';
import { ROUTE } from '../../common/utils/constant';
import { getImage } from '../../common/utils/image';
import Link from '../Header/Link.style';
import Star from '../Star/Star';
import { MovieImage, MovieImageListItem } from './MovieItem.style';

const MovieItem = ({ id, title, vote_average, poster_path }) => {
  return (
    <MovieImageListItem>
      <Link to={`${ROUTE.MOVIE}/${id}`}>
        <MovieImage src={getImage(poster_path)} alt={title} loading="lazy" />
        <ImageListItemBar title={title} subtitle={<Star value={vote_average / 2} />} />
      </Link>
    </MovieImageListItem>
  );
};

export default MovieItem;
