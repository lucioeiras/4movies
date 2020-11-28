import { FaSearch } from 'react-icons/fa';

import PageContent from '../../components/PageContent';
import Sidebar from '../../components/Sidebar';
import MoviesList from '../../components/MoviesList';

import { Container, SearchBar } from './styles';

const Search = () => {
  return (
    <Container>
      <Sidebar page="search" />

      <PageContent>
        <SearchBar>
          <FaSearch size={20} />
          <input placeholder="Type something cool" />
        </SearchBar>

        <MoviesList title="Results" />
      </PageContent>
    </Container>
  );
};

export default Search;
