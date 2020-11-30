import useFavorites from '../../hooks/useFavorites';

import PageContent from '../../components/PageContent';
import SideBar from '../../components/SideBar';
import MoviesList from '../../components/MoviesList';

import { Container } from './styles';

const Favorites = () => {
  const { getMoviesList } = useFavorites();
  const favoritesMovies = getMoviesList();

  return (
    <Container>
      <SideBar page="favorites" />

      <PageContent>
        {!!favoritesMovies && (
          <MoviesList
            title="My Favorites"
            movies={favoritesMovies}
            notFound="You haven't added any movies to your list yet."
          />
        )}
      </PageContent>
    </Container>
  );
};

export default Favorites;
