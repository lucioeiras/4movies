import { FC } from 'react';

import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaHeart } from 'react-icons/fa';

import logo from '../../assets/logo.svg';

import { Container, Tabs, Tab } from './styles';

interface SidebarProps {
  page?: string;
}

const Sidebar: FC<SidebarProps> = ({ page }) => {
  return (
    <Container>
      <img src={logo} alt="4Movies" />

      <Tabs>
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
      </Tabs>
    </Container>
  );
};

export default Sidebar;
