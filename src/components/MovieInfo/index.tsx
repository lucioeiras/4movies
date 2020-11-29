import { FC, useCallback, useState } from 'react';
import { FaStar, FaArrowRight, FaHeart, FaTimesCircle } from 'react-icons/fa';

import useFavorites from '../../hooks/useFavorites';
import Movie from '../../types/movie';

import { Container, Info, Votes, ViewMore, Favorite } from './styles';

interface MovieInfoProps {
  isHome?: boolean;
  movie: Movie;
}

const MovieInfo: FC<MovieInfoProps> = ({ isHome, movie }) => {
  const { addMovie, getMovieById, removeMovie } = useFavorites();

  const [isFavorite, setIsFavorite] = useState(() => {
    const searchMovie = getMovieById(movie.id);

    if (searchMovie) {
      return true;
    }

    return false;
  });

  const handleToogleFavorite = useCallback((selectedMovie: Movie) => {
    if (isFavorite) {
      removeMovie(selectedMovie.id);
      setIsFavorite(false);
    } else {
      addMovie(selectedMovie);
      setIsFavorite(true);
    }
  }, []);

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
          <ViewMore to={`/details/${movie.id}`}>
            View more
            <FaArrowRight size={16} color="#fff" />
          </ViewMore>
        ) : (
          <Favorite type="button" onClick={() => handleToogleFavorite(movie)}>
            {isFavorite ? (
              <>
                <FaTimesCircle size={16} color="#fff" />
                <p>Remove from favorites</p>
              </>
            ) : (
              <>
                <FaHeart size={16} color="#fff" />
                <p>Add to your favorites</p>
              </>
            )}
          </Favorite>
        )}
      </Info>
    </Container>
  );
};

export default MovieInfo;
