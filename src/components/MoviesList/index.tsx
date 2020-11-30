import { FC } from 'react';

import Movie from '../../types/movie';

import { Container, MoviesGrid, Poster } from './styles';

interface MoviesListProps {
  title: string;
  movies: Movie[];
  notFound: string;
}

const MoviesList: FC<MoviesListProps> = ({ title, movies, notFound }) => {
  return (
    <Container>
      <h2>{title}</h2>

      {movies[0] ? (
        <MoviesGrid>
          {movies.map(movie => (
            <Poster key={movie.id} to={`/details/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="img"
              />
            </Poster>
          ))}
        </MoviesGrid>
      ) : (
        <h3>{notFound}</h3>
      )}
    </Container>
  );
};

export default MoviesList;
