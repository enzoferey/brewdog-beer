import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BeerList from "pages/BeerList";
import Beer from "pages/Beer";
import NotFound from "pages/NotFound";

// Reset scroll on page change
const withResetScroll = Component =>
  class extends React.PureComponent {
    componentDidMount = () => {
      window.scrollTo(0, 0);
    };

    render = () => <Component {...this.props} />;
  };

const BeerListScroll = withResetScroll(BeerList);
const BeerScroll = withResetScroll(Beer);

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={BeerListScroll} />
      <Route exact path="/:beerName" component={BeerScroll} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
