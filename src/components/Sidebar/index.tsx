import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaHeart } from 'react-icons/fa';

import logo from '../../assets/logo.svg';

import { Container } from './styles';

const Sidebar = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt="4Movies" />
      </div>

      <div>
        <Link to="/">
          <FaHome size={32} color="#FF385C" />
        </Link>

        <Link to="/">
          <FaSearch size={32} color="#c9c9c9" />
        </Link>

        <Link to="/">
          <FaHeart size={32} color="#c9c9c9" />
        </Link>
      </div>
    </Container>
  );
};

export default Sidebar;
