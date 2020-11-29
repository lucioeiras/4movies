import { useState, useEffect, useRef } from 'react';

import Movie from '../../types/movie';

import PageContent from '../../components/PageContent';
import Sidebar from '../../components/Sidebar';
import MovieInfo from '../../components/MovieInfo';
import MoviesList from '../../components/MoviesList';

import { Container } from './styles';

const Home = () => {
  const [spotlight, setSpotlight] = useState<Movie>();
  const [popularMovies, setPopularMovies] = useState<Movie[]>();
  let nextPage = 2;

  const loaderRef = useRef<HTMLDivElement>(null);

  function handleLoadMoreMovies() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?page=${nextPage}&api_key=${process.env.REACT_APP_API_KEY}`,
    )
      .then(response => response.json())
      .then(response => {
        nextPage = response.page + 1;

        setPopularMovies(
          oldMovies => oldMovies && [...oldMovies, ...response.results],
        );
      });
  }

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`,
    )
      .then(response => response.json())
      .then(response => {
        const spotlightMovie = response.results[0];

        setSpotlight(spotlightMovie);
        setPopularMovies(
          response.results.filter(
            (result: Movie) => result.id !== spotlightMovie.id,
          ),
        );
      });
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    const handleObserver = (entities: any) => {
      const target = entities[0];

      if (target.isIntersecting) {
        handleLoadMoreMovies();
      }
    };

    const observer = new IntersectionObserver(handleObserver, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
  }, []);

  return (
    <Container>
      <Sidebar page="home" />

      <PageContent>
        {spotlight && <MovieInfo isHome movie={spotlight} />}

        {popularMovies && (
          <MoviesList title="Popular Movies" movies={popularMovies} />
        )}

        {spotlight && popularMovies && <div ref={loaderRef} />}
      </PageContent>
    </Container>
  );
};

export default Home;
