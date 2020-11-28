import { useState, useEffect } from 'react';

import Movie from '../../types/movie';

import PageContent from '../../components/PageContent';
import Sidebar from '../../components/Sidebar';
import MovieInfo from '../../components/MovieInfo';
import MoviesList from '../../components/MoviesList';

import { Container } from './styles';

const Home = () => {
  const [spotlight, setSpotlight] = useState<Movie>();
  const [popularMovies, setPopularMovies] = useState<Movie[]>();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`,
    )
      .then(response => response.json())
      .then(response => {
        setSpotlight(response.results[0]);
        setPopularMovies(
          response.results.filter(
            (result: Movie, index: number) => index !== 0,
          ),
        );
      });
  }, []);

  return (
    <Container>
      <Sidebar page="home" />

      <PageContent>
        {spotlight && <MovieInfo isHome movie={spotlight} />}

        {popularMovies && (
          <MoviesList title="Popular Movies" movies={popularMovies} />
        )}
      </PageContent>
    </Container>
  );
};

export default Home;
