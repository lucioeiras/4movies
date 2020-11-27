import Sidebar from '../../components/Sidebar';

import { Container } from './styles';

const Favorites = () => {
  return (
    <Container>
      <Sidebar page="favorites" />

      <h1>Favorites</h1>
    </Container>
  );
};

export default Favorites;
