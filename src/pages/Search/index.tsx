import { FaSearch } from 'react-icons/fa';

import Sidebar from '../../components/Sidebar';
import MoviesList from '../../components/MoviesList';

import { Container, Content, SearchBar } from './styles';

const Search = () => {
  return (
    <Container>
      <Sidebar page="search" />

      <Content>
        <SearchBar>
          <FaSearch size={20} />
          <input placeholder="Type something cool" />
        </SearchBar>

        <MoviesList title="Results" />
      </Content>
    </Container>
  );
};

export default Search;
