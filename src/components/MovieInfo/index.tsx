import { FC } from 'react';
import { FaStar, FaArrowRight, FaHeart } from 'react-icons/fa';

import Movie from '../../types/movie';

import { Container, Info, Votes, Button } from './styles';

interface MovieInfoProps {
  isHome?: boolean;
  movie: Movie;
}

const MovieInfo: FC<MovieInfoProps> = ({ isHome, movie }) => {
  return (
    <Container>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt="post"
      />

      <Info>
        <Votes>
          <FaStar size={24} color="#FF385C" />
          <span>{movie.vote_average}</span>
        </Votes>

        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>

        {isHome ? (
          <Button to={`/details/${movie.id}`}>
            View more
            <FaArrowRight size={16} color="#fff" />
          </Button>
        ) : (
          <Button to={`/details/${movie.id}`}>
            Add to your favorites
            <FaHeart size={16} color="#fff" />
          </Button>
        )}
      </Info>
    </Container>
  );
};

export default MovieInfo;
