import React from "react";

const BeerContext = React.createContext();

export const withBeers = Component => props => (
  <BeerContext.Consumer>
    {beerContext => <Component {...props} {...beerContext} />}
  </BeerContext.Consumer>
);

export default BeerContext;
