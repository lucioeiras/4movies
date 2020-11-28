import { useState, useCallback, FormEvent } from 'react';
import { FaSearch } from 'react-icons/fa';

import Movie from '../../types/movie';

import PageContent from '../../components/PageContent';
import Sidebar from '../../components/Sidebar';
import MoviesList from '../../components/MoviesList';

import { Container, Form } from './styles';

const Search = () => {
  const [results, setResults] = useState<Movie[]>();
  const [query, setQuery] = useState('');

  const searchMovies = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (query) {
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`,
        )
          .then(response => response.json())
          .then(response => setResults(response.results));
      }
    },
    [query],
  );

  return (
    <Container>
      <Sidebar page="search" />

      <PageContent>
        <Form onSubmit={searchMovies}>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Type something cool"
          />

          <button type="submit">
            <FaSearch size={20} />
          </button>
        </Form>

        {results && <MoviesList title="Results" movies={results} />}
      </PageContent>
    </Container>
  );
};

export default Search;
