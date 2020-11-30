import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from '../../styles/colors';

export const Container = styled.section`
  width: 100%;
  max-width: 112rem;

  border-radius: 0.5rem;
  background: ${colors.card};

  padding: 4.8rem;
  margin-top: 6.4rem;

  > h2 {
    color: ${colors.primary};
    font-size: 4rem;
  }

  > h3 {
    color: ${colors.text};
    font-size: 32px;
    font-weight: 300;

    margin-top: 16px;
  }

  @media (max-width: 700px) {
    padding: 2.4rem;

    > div {
      grid-template-columns: 1fr 1fr;
    }

    > h2 {
      font-size: 3.2rem;
    }
  }
`;

export const MoviesGrid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2.4rem;

  margin-top: 3.2rem;
`;

export const Poster = styled(Link)`
  transition: transform 0.5s;

  &:hover {
    transform: translateY(-0.8rem);
  }

  > img {
    width: 100%;
    border-radius: 0.5rem;
  }
`;
