import PageContent from '../../components/PageContent';
import Sidebar from '../../components/Sidebar';
import MoviesList from '../../components/MoviesList';

import { Container } from './styles';

const Favorites = () => {
  return (
    <Container>
      <Sidebar page="favorites" />

      <PageContent>
        <MoviesList title="My Favorites" />
      </PageContent>
    </Container>
  );
};

export default Favorites;
