import React from "react";
import BeerContext from "./BeerContext";

const withBeers = Component => props => (
  <BeerContext.Consumer>
    {beerContext => <Component {...props} {...beerContext} />}
  </BeerContext.Consumer>
);

export default withBeers;
