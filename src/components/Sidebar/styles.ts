import styled from 'styled-components';

import colors from '../../styles/colors';

interface TabProps {
  $active?: boolean;
}

export const Container = styled.div`
  position: fixed;

  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${colors.sidebar};

  padding: 2.4rem;

  @media (max-width: 700px) {
    bottom: 0;

    width: 100%;
    height: 9.6rem;

    flex-direction: row;
    justify-content: center;

    > img {
      display: none;
    }
  }
`;

export const Tabs = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;

  margin: auto 0;

  @media (max-width: 700px) {
    width: 100%;

    flex-direction: row;
    justify-content: space-around;

    margin: 0;
  }
`;

export const Tab = styled.li<TabProps>`
  & + li {
    margin-top: 4.8rem;
  }

  > a {
    > svg {
      color: ${({ $active }) => ($active ? colors.primary : colors.grey)};
      transition: color 0.3s;

      &:hover {
        color: ${colors.primary};
      }
    }
  }

  @media (max-width: 700px) {
    & + li {
      margin-top: 0;
    }
  }
`;
