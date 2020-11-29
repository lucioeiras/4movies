import Routes from './routes/index';
import GlobalStyles from './styles/global';

import { FavoritesProvider } from './contexts/Favorites';

const App = () => (
  <FavoritesProvider>
    <Routes />
    <GlobalStyles />
  </FavoritesProvider>
);

export default App;
