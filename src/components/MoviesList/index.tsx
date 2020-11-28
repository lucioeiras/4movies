import { FC } from 'react';

import Movie from '../../types/movie';

import { Container, Poster } from './styles';

interface MoviesListProps {
  title: string;
  movies: Movie[];
}

const MoviesList: FC<MoviesListProps> = ({ title, movies }) => {
  return (
    <Container>
      <h2>{title}</h2>

      <div>
        {movies.map(movie => (
          <Poster key={movie.id} to="/details">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="img"
            />
          </Poster>
        ))}
      </div>
    </Container>
  );
};

export default MoviesList;
