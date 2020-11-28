import PageContent from '../../components/PageContent';
import Sidebar from '../../components/Sidebar';
import MovieInfo from '../../components/MovieInfo';
import MoviesList from '../../components/MoviesList';

import { Container, Reviews, Review } from './styles';

const Details = () => {
  return (
    <Container>
      <Sidebar />

      <PageContent>
        <MovieInfo />

        <Reviews>
          <h2>Reviews</h2>

          <div>
            <Review>
              <h3>Dan Harbor</h3>
              <p>
                “The work of billionaire tech CEO Donovan Chalmers is so
                valuable that he hires mercenaries to protect it, and a
                terrorist group kidnaps his daughter just to get it.”
              </p>
            </Review>

            <Review>
              <h3>Dan Harbor</h3>
              <p>
                “The work of billionaire tech CEO Donovan Chalmers is so
                valuable that he hires mercenaries to protect it, and a
                terrorist group kidnaps his daughter just to get it.”
              </p>
            </Review>

            <Review>
              <h3>Dan Harbor</h3>
              <p>
                “The work of billionaire tech CEO Donovan Chalmers is so
                valuable that he hires mercenaries to protect it, and a
                terrorist group kidnaps his daughter just to get it.”
              </p>
            </Review>
          </div>
        </Reviews>

        <MoviesList title="Similar Movies" />
      </PageContent>
    </Container>
  );
};

export default Details;
