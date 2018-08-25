import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BeerList from "pages/BeerList";
import Beer from "pages/Beer";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={BeerList} />
      <Route exact path="/:beerName" component={Beer} />
    </Switch>
  </Router>
);

export default Routes;
