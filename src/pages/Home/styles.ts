import styled from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

import colors from '../../styles/colors';

export const Container = styled.div`
  height: 100%;
  display: flex;
`;

export const Content = styled.main`
  width: 100%;
  height: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 4.8rem 0 4.8rem 9.6rem;

  @media (max-width: 700px) {
    padding: 4.8rem 3.2rem 14.4rem 3.2rem;
  }
`;

export const Spotlight = styled.section`
  width: 100%;
  max-width: 1120px;

  display: flex;
  align-items: center;

  border-radius: 2.4rem;
  background: ${colors.card};

  padding: 4.8rem;

  > img {
    width: 24.6rem;
    height: 36.9rem;

    border-radius: 2.4rem;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 3.2rem;

    > img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Info = styled.div`
  margin-left: 4.8rem;

  > h1 {
    color: ${colors.title};
    font-size: 6.4rem;

    margin: 1.6rem 0;
  }

  > p {
    color: ${colors.text};
    font: 400 1.6rem 'Poppins';
  }

  @media (max-width: 700px) {
    margin: 3.2rem 0 0 0;

    > h1 {
      font-size: 4.8rem;
    }
  }
`;

export const Votes = styled.div`
  display: flex;
  align-items: center;

  > span {
    color: ${colors.primary};
    font-size: 2rem;
    font-weight: 700;

    margin-left: 0.8rem;
  }
`;

export const ViewMore = styled(Link)`
  width: fit-content;
  height: 4.8rem;

  display: flex;
  align-items: center;

  border-radius: 0.5rem;
  background: ${colors.primary};

  color: ${colors.white};
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;

  padding: 2rem;
  margin-top: 3.2rem;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, colors.primary)};
  }

  > svg {
    margin-left: 1.6rem;
  }
`;

export const Popular = styled.section`
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

export const Movie = styled(Link)`
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-0.8rem);
  }

  > img {
    width: 100%;
    border-radius: 1.6rem;
  }
`;
