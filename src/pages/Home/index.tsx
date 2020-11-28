import PageContent from '../../components/PageContent';
import Sidebar from '../../components/Sidebar';
import MovieInfo from '../../components/MovieInfo';
import MoviesList from '../../components/MoviesList';

import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <Sidebar page="home" />

      <PageContent>
        <MovieInfo isHome />

        <MoviesList title="Popular Movies" />
      </PageContent>
    </Container>
  );
};

export default Home;
