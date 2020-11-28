import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from '../../styles/colors';

export const Container = styled.section`
  width: 100%;
  max-width: 112rem;

  border-radius: 2.4rem;
  background: ${colors.card};

  padding: 4.8rem;
  margin-top: 6.4rem;

  > h2 {
    color: ${colors.primary};
    font-size: 4rem;
  }

  > div {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 2.4rem;

    margin-top: 3.2rem;
  }

  @media (max-width: 700px) {
    > div {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export const Poster = styled(Link)`
  transition: transform 0.5s;

  &:hover {
    transform: translateY(-0.8rem);
  }

  > img {
    width: 100%;
    border-radius: 1.6rem;
  }
`;
