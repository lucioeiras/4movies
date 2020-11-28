import { FC } from 'react';
import { FaStar, FaArrowRight, FaHeart } from 'react-icons/fa';

import { Container, Info, Votes, Button } from './styles';

interface MovieInfoProps {
  isHome?: boolean;
}

const MovieInfo: FC<MovieInfoProps> = ({ isHome }) => {
  return (
    <Container>
      <img
        src="https://avatars0.githubusercontent.com/u/67290471?s=460&u=3a40833b6b1e19b81017cb915f8af816f1e51ea7&v=4"
        alt="post"
      />

      <Info>
        <Votes>
          <FaStar size={24} color="#FF385C" />
          <span>7.1</span>
        </Votes>

        <h1>Chick Fight</h1>
        <p>
          When Anna Wyncomb is introduced to an an underground, all-female fight
          club in order to turn the mess of her life around, she discovers she
          is much more personally connected to the history of the club than she
          could ever imagine.
        </p>

        {isHome ? (
          <Button to="/details">
            View more
            <FaArrowRight size={16} color="#fff" />
          </Button>
        ) : (
          <Button to="/details">
            Add to your favorites
            <FaHeart size={16} color="#fff" />
          </Button>
        )}
      </Info>
    </Container>
  );
};

export default MovieInfo;
