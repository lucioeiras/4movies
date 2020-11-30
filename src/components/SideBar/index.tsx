import { FC } from 'react';

import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaHeart } from 'react-icons/fa';

import logo from '../../assets/logo.svg';

import { Container, TabsContainer, Tab } from './styles';

interface SideBarProps {
  page?: string;
}

const SideBar: FC<SideBarProps> = ({ page }) => {
  return (
    <Container>
      <img src={logo} alt="4Movies" />

      <TabsContainer>
        <Tab isActive={page === 'home'}>
          <Link to="/">
            <FaHome size={32} />
          </Link>
        </Tab>

        <Tab isActive={page === 'search'}>
          <Link to="/search">
            <FaSearch size={32} />
          </Link>
        </Tab>

        <Tab isActive={page === 'favorites'}>
          <Link to="/favorites">
            <FaHeart size={32} />
          </Link>
        </Tab>
      </TabsContainer>
    </Container>
  );
};

export default SideBar;
