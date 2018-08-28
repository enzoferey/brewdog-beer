import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Immutable from "immutable";

import { getAllBeers } from "db";
import mockBeers from "./response.json";

import BeerList from "pages/BeerList";
import Beer from "pages/Beer";
import NotFound from "pages/NotFound";
import Spinner from "pages/Spinner";

const WAIT_TIME = 400; // maximum time to wait before display a spinner

const withResetScroll = Component =>
  class extends React.PureComponent {
    componentDidMount = () => {
      window.scrollTo(0, 0);
    };

    render = () => <Component {...this.props} />;
  };

const BeerListScroll = withResetScroll(BeerList);
const BeerScroll = withResetScroll(Beer);

class Routes extends React.Component {
  state = {
    beers: Immutable.List(),
    fetching: true,
    spinner: false,
  };

  componentDidMount = async () => {
    try {
      const response = await getAllBeers();
      this.setBeers(Immutable.fromJS(response.data));
    } catch (e) {
      // Proper error display should be done here instead of forcing an always working demo
      this.setBeers(Immutable.fromJS(mockBeers));
    }
  };

  componentWillUnmount = () => {
    clearTimeout(this._spinnerTimeout);
  };

  setBeers = beers => {
    clearTimeout(this._spinnerTimeout);
    this.setState({ beers, fetching: false });
  };

  setElementDone = (beerId, index, path) => {
    const { beers } = this.state;

    const beerIndex = beers.findIndex(beer => beer.get("id") === beerId);
    const updatedBeers = beers.update(beerIndex, beer =>
      beer.updateIn(path, list => {
        // Edge case for ambiguious method being an array
        if (Immutable.List.isList(list)) {
          return list.update(index, element => element.set("done", true));
        } else {
          return list.set("done", true);
        }
      })
    );

    this.setState({
      beers: updatedBeers,
    });
  };

  setHopDone = (beerId, hopIndex) => {
    this.setElementDone(beerId, hopIndex, ["ingredients", "hops"]);
  };

  setMaltDone = (beerId, maltIndex) => {
    this.setElementDone(beerId, maltIndex, ["ingredients", "malt"]);
  };

  setMethodDone = (beerId, methodIndex) => {
    this.setElementDone(beerId, methodIndex, ["method"]);
  };

  showSpinner = () => {
    this.setState({ spinner: true });
  };

  withBeers = Component => props => (
    <Component beers={this.state.beers.toJS()} {...props} />
  );

  renderBeer = props =>
    this.withBeers(BeerScroll)({
      ...props,
      setHopDone: this.setHopDone,
      setMaltDone: this.setMaltDone,
      setMethodDone: this.setMethodDone,
    });

  render = () => {
    const { fetching, spinner } = this.state;

    if (fetching) {
      if (spinner) return <Spinner />;
      else {
        this._spinnerTimeout = setTimeout(this.showSpinner, WAIT_TIME);
        return null; // don't render anything until WAIT_TIME has passed
      }
    }

    return (
      <Router>
        <Switch>
          <Route exact path="/" render={this.withBeers(BeerListScroll)} />
          <Route exact path="/:beerName" render={this.renderBeer} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  };
}

export default Routes;
