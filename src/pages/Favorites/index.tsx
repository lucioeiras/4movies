import Sidebar from '../../components/Sidebar';
import MoviesList from '../../components/MoviesList';

import { Container, Content } from './styles';

const Favorites = () => {
  return (
    <Container>
      <Sidebar page="favorites" />

      <Content>
        <MoviesList title="My Favorites" />
      </Content>
    </Container>
  );
};

export default Favorites;
