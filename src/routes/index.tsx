import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Details from '../pages/Details';
import Search from '../pages/Search';
import Favorites from '../pages/Favorites';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details" component={Details} />
        <Route path="/search" component={Search} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
