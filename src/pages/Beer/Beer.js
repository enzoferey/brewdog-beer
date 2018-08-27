import React from "react";
import PropTypes from "prop-types";
import style from "./beer.scss";

import BeerDetails from "components/BeerDetails";
import NotFound from "pages/NotFound";

const Beer = ({ beers, match }) => {
  const urlBeer = match.params.beerName;
  const beer = beers.find(beer => beer.name === urlBeer);

  if (!beer)
    return (
      <NotFound
        message={`Beer "${urlBeer}" doesn't seem to exist, try with another one`}
      />
    );

  const { image_url: image, ...rest } = beer;
  return (
    <div className={style.main}>
      <BeerDetails image={image} {...rest} />
    </div>
  );
};

Beer.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.shape({
    params: PropTypes.shape({
      beerName: PropTypes.string,
    }),
  }),
};

export default Beer;
