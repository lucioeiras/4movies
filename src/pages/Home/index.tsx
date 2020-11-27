import Sidebar from '../../components/Sidebar';

import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <Sidebar page="home" />

      <h1>Home</h1>
    </Container>
  );
};

export default Home;
