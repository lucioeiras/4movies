import styled from 'styled-components';
import { shade } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.div`
  height: 100%;
  display: flex;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 112rem;

  display: flex;

  > input {
    width: 100%;

    border: none;
    border-radius: 0.8rem;
    background: ${colors.card};

    color: ${colors.text};
    font-size: 2rem;

    padding: 2rem;

    &::placeholder {
      color: ${colors.grey};
    }
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 8px;

    background: ${colors.primary};

    padding: 20px;
    margin-left: 16px;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, colors.primary)};
    }

    > svg {
      color: ${colors.white};
    }
  }
`;
