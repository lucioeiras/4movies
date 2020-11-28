import styled from 'styled-components';

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

export const SearchBar = styled.div`
  width: 100%;
  max-width: 1120px;

  display: flex;
  align-items: center;

  border-radius: 1.6rem;
  background: ${colors.card};

  padding: 2rem;

  &:focus-within {
    > svg {
      color: ${colors.primary};
    }
  }

  > svg {
    color: ${colors.grey};
    transition: color 0.5s;
  }

  > input {
    border: none;
    background: transparent;

    color: ${colors.text};
    font-size: 2rem;

    margin-left: 2rem;

    &::placeholder {
      color: ${colors.grey};
    }
  }
`;
