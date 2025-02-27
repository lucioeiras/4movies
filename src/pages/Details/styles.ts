import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const CastContainer = styled.section`
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

  > div {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 3.2rem;

    margin-top: 3.2rem;
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

export const Actor = styled.div`
  > img {
    width: 100%;
    border-radius: 0.5rem;

    background: url('../../assets/not-found.png');
  }

  > h3 {
    color: ${colors.title};
    font: 500 2.4rem 'Poppins';

    margin-top: 16px;
  }

  @media (max-width: 700px) {
    > h3 {
      font-size: 2rem;
    }
  }
`;

export const ReviewsContainer = styled.section`
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

  > div {
    margin-top: 32px;
  }

  @media (max-width: 700px) {
    padding: 2.4rem;

    > h2 {
      font-size: 3.2rem;
    }

    > h3 {
      font-size: 2.4rem;
    }
  }
`;

export const Review = styled.div`
  & + & {
    margin-top: 3.2rem;
  }

  > h3 {
    color: ${colors.title};
    font: 500 2.4rem 'Poppins';
  }

  > p {
    color: ${colors.text};
    font: 400 1.6rem 'Poppins';
    font-style: italic;

    margin-top: 1.2rem;
  }
`;
