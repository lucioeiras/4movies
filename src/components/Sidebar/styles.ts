import styled from 'styled-components';

interface TabProps {
  $active?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #fff;

  padding: 24px;
`;

export const Tabs = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;

  margin: auto 0;
`;

export const Tab = styled.li<TabProps>`
  & + li {
    margin-top: 48px;
  }

  > a {
    > svg {
      color: ${({ $active }) => ($active ? '#ff385c' : '#c9c9c9')};
      transition: color 0.3s;

      &:hover {
        color: #ff385c;
      }
    }
  }
`;
