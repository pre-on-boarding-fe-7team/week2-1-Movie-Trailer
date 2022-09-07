import MovieItem from './MovieItem';
import { Container, MovieImageList } from './MovieList.style';

const MovieList = ({ movies }) => {
  return (
    <Container>
      <MovieImageList gap={12}>
        {movies?.map(({ id, title, vote_average, poster_path }) => (
          <MovieItem
            key={id}
            id={id}
            title={title}
            vote_average={vote_average}
            poster_path={poster_path}
          />
        ))}
      </MovieImageList>
    </Container>
  );
};

export default MovieList;
