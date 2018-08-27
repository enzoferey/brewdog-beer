import React from "react";
import PropTypes from "prop-types";
import style from "./beer-list.scss";

import { Link } from "react-router-dom";

const BeerList = ({ beers }) => (
  <div className={style.main}>
    {beers.map(beer => (
      <Link key={beer.name} to={beer.name}>
        {beer.name}
      </Link>
    ))}
  </div>
);

BeerList.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.object),
};

export default BeerList;
