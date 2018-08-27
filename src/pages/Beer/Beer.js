import React from "react";
import PropTypes from "prop-types";
import style from "./beer.scss";

const Beer = ({ beers, match }) => (
  <div className={style.main}>
    {JSON.stringify(beers.find(beer => beer.name === match.params.beerName))}
  </div>
);

Beer.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.shape({
    params: PropTypes.shape({
      beerName: PropTypes.string,
    }),
  }),
};

export default Beer;
