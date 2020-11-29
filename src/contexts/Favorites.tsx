/* eslint-disable no-unused-vars */

import { createContext, FC, useCallback, useState, useEffect } from 'react';

import Movie from '../types/movie';

export interface FavoritesContextData {
  getMovieById(movieId: number): Movie | undefined;
  getMoviesList(): Movie[];
  addMovie(movie: Movie): void;
  removeMovie(movieId: number): void;
}

export const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData,
);

export const FavoritesProvider: FC = ({ children }) => {
  const [favoritesMovies, setFavoritesMovies] = useState<Movie[]>(() => {
    const movies = localStorage.getItem('favorites');

    if (movies) {
      return JSON.parse(movies);
    }

    return [];
  });

  const getMovieById = useCallback(
    (movieId: number) => {
      return favoritesMovies.find(movie => movie.id === movieId);
    },
    [favoritesMovies],
  );

  const getMoviesList = useCallback(() => {
    return favoritesMovies;
  }, [favoritesMovies]);

  const addMovie = useCallback(
    (movie: Movie) => {
      setFavoritesMovies(oldMovies => [...oldMovies, movie]);
    },
    [favoritesMovies],
  );

  const removeMovie = useCallback(
    (movieId: number) => {
      const newFavoritesMovies = favoritesMovies.filter(
        movie => movie.id !== movieId,
      );

      setFavoritesMovies(newFavoritesMovies);
    },
    [favoritesMovies],
  );

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoritesMovies));
  }, [favoritesMovies]);

  return (
    <FavoritesContext.Provider
      value={{ getMovieById, getMoviesList, addMovie, removeMovie }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
