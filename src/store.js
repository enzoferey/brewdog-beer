import React from "react";
import PropTypes from "prop-types";
import Immutable from "immutable";

import { getAllBeers } from "db";
import mockBeers from "./response.json";

import BeerContext from "contexts/BeerContext";

import Spinner from "pages/Spinner";

const WAIT_TIME = 400; // maximum time to wait before display a spinner

class Store extends React.Component {
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

  showSpinner = () => {
    this.setState({ spinner: true });
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

  render = () => {
    const { beers, fetching, spinner } = this.state;

    if (fetching) {
      if (spinner) return <Spinner />;
      else {
        this._spinnerTimeout = setTimeout(this.showSpinner, WAIT_TIME);
        return null; // don't render anything until WAIT_TIME has passed
      }
    }

    return (
      <BeerContext.Provider
        value={{
          beers: beers.toJS(),
          setHopDone: this.setHopDone,
          setMaltDone: this.setMaltDone,
          setMethodDone: this.setMethodDone,
        }}
      >
        {this.props.children}
      </BeerContext.Provider>
    );
  };
}

Store.propTypes = {
  children: PropTypes.element,
};

export default Store;
