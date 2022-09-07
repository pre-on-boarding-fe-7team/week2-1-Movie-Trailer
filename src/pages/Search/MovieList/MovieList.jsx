import MovieItem from './MovieItem';
import { MovieImageList } from './MovieList.style';

const MovieList = ({ movies }) => {
  return (
    <MovieImageList gap={8}>
      {movies?.map(({ id, title, vote_average, poster_path }) => (
        <MovieItem key={id} title={title} vote_average={vote_average} poster_path={poster_path} />
      ))}
    </MovieImageList>
  );
};

export default MovieList;
