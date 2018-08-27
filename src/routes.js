import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { getAllBeers } from "db";
import mockBeers from "./response.json";

import BeerList from "pages/BeerList";
import Beer from "pages/Beer";
import NotFound from "pages/NotFound";
import Spinner from "pages/Spinner";

class Routes extends React.Component {
  state = {
    beers: [],
    fetching: true,
    showSpinner: false,
  };

  componentDidMount = async () => {
    try {
      const response = await getAllBeers();
      this.setBeers(response.data);
    } catch (e) {
      // Proper error display should be done here instead
      this.setBeers(mockBeers);
    }
  };

  componentWillUnmount = () => {
    clearTimeout(this._spinnerTimeout);
  };

  setBeers = beers => {
    clearTimeout(this._spinnerTimeout);
    this.setState({ beers, fetching: false });
  };

  showSpinner = () => {
    this.setState({ showSpinner: true });
  };

  withBeers = Component => props => (
    <Component beers={this.state.beers} {...props} />
  );

  render = () => {
    const { fetching, showSpinner } = this.state;

    if (fetching) {
      if (showSpinner) return <Spinner />;
      else {
        this._spinnerTimeout = setTimeout(() => {
          this.showSpinner();
        }, 400);

        return null;
      }
    }

    return (
      <Router>
        <Switch>
          <Route exact path="/" render={this.withBeers(BeerList)} />
          <Route exact path="/:beerName" render={this.withBeers(Beer)} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  };
}

export default Routes;
