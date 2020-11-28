import { FC } from 'react';

import { Container } from './styles';

const PageContent: FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PageContent;
