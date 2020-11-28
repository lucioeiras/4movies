import { FC } from 'react';

import { Container, Movie } from './styles';

interface MoviesListProps {
  title: string;
}

const MoviesList: FC<MoviesListProps> = ({ title }) => {
  return (
    <Container>
      <h2>{title}</h2>

      <div>
        <Movie to="/details">
          <img
            src="https://avatars0.githubusercontent.com/u/67290471?s=460&u=3a40833b6b1e19b81017cb915f8af816f1e51ea7&v=4"
            alt="img"
          />
        </Movie>

        <Movie to="/details">
          <img
            src="https://avatars0.githubusercontent.com/u/67290471?s=460&u=3a40833b6b1e19b81017cb915f8af816f1e51ea7&v=4"
            alt="img"
          />
        </Movie>

        <Movie to="/details">
          <img
            src="https://avatars0.githubusercontent.com/u/67290471?s=460&u=3a40833b6b1e19b81017cb915f8af816f1e51ea7&v=4"
            alt="img"
          />
        </Movie>

        <Movie to="/details">
          <img
            src="https://avatars0.githubusercontent.com/u/67290471?s=460&u=3a40833b6b1e19b81017cb915f8af816f1e51ea7&v=4"
            alt="img"
          />
        </Movie>

        <Movie to="/details">
          <img
            src="https://avatars0.githubusercontent.com/u/67290471?s=460&u=3a40833b6b1e19b81017cb915f8af816f1e51ea7&v=4"
            alt="img"
          />
        </Movie>

        <Movie to="/details">
          <img
            src="https://avatars0.githubusercontent.com/u/67290471?s=460&u=3a40833b6b1e19b81017cb915f8af816f1e51ea7&v=4"
            alt="img"
          />
        </Movie>
      </div>
    </Container>
  );
};

export default MoviesList;
