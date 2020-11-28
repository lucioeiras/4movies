import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  height: 100%;
  display: flex;
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
