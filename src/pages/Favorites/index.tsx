import useFavorites from '../../hooks/useFavorites';

import PageContent from '../../components/PageContent';
import Sidebar from '../../components/Sidebar';
import MoviesList from '../../components/MoviesList';

import { Container } from './styles';

const Favorites = () => {
  const { getMoviesList } = useFavorites();
  const favoritesMovies = getMoviesList();

  return (
    <Container>
      <Sidebar page="favorites" />

      <PageContent>
        {!!favoritesMovies && (
          <MoviesList title="My Favorites" movies={favoritesMovies} />
        )}
      </PageContent>
    </Container>
  );
};

export default Favorites;
