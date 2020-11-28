import styled from 'styled-components';

export const Container = styled.div`
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
