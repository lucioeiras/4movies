import { useState, useEffect, useRef, useCallback } from 'react';

import Movie from '../../types/movie';

import PageContent from '../../components/PageContent';
import SideBar from '../../components/SideBar';
import MovieInfo from '../../components/MovieInfo';
import MoviesList from '../../components/MoviesList';

import { Container } from './styles';

const Home = () => {
  const [spotlight, setSpotlight] = useState<Movie>();
  const [popularMovies, setPopularMovies] = useState<Movie[]>();

  const loaderRef = useRef<HTMLDivElement>(null);

  let nextPage = 2;

  const handleLoadMorePosts = useCallback(
    (entities: any) => {
      if (entities[0].isIntersecting) {
        fetch(
          `https://api.themoviedb.org/3/movie/popular?page=${nextPage}&api_key=${process.env.REACT_APP_API_KEY}`,
        )
          .then(response => response.json())
          .then(response => {
            setPopularMovies(
              oldMovies => oldMovies && [...oldMovies, ...response.results],
            );
          });

        nextPage += 1;
      }
    },
    [nextPage],
  );

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`,
    )
      .then(response => response.json())
      .then(response => {
        const spotlightMovie = response.results[0];

        setSpotlight(spotlightMovie);
        setPopularMovies(response.results);
      });
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleLoadMorePosts, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
  }, [popularMovies]);

  return (
    <Container>
      <SideBar page="home" />

      <PageContent>
        {spotlight && <MovieInfo isHome movie={spotlight} />}

        {popularMovies && (
          <MoviesList
            title="Popular Movies"
            movies={popularMovies}
            notFound="We couldn't find anything"
          />
        )}

        {popularMovies && <div ref={loaderRef} />}
      </PageContent>
    </Container>
  );
};

export default Home;
