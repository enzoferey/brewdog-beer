import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { getAllBeers } from "db";

import BeerList from "pages/BeerList";
import Beer from "pages/Beer";

class Routes extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount = async () => {
    try {
      const response = await getAllBeers();
      this.setState({ beers: response.data });
    } catch (e) {
      console.log("Error while fetching");
    }
  };

  withBeers = Component => props => (
    <Component beers={this.state.beers} {...props} />
  );

  render = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={this.withBeers(BeerList)} />
          <Route path="/:beerName" render={this.withBeers(Beer)} />
        </Switch>
      </Router>
    );
  };
}

export default Routes;
