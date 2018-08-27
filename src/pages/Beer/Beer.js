import React from "react";
import PropTypes from "prop-types";
import style from "./beer.scss";

import NotFound from "pages/NotFound";

import BeerDetails from "components/BeerDetails";
import RowList from "components/RowList";

const Beer = ({ beers, match }) => {
  const urlBeer = match.params.beerName;
  const beer = beers.find(beer => beer.name === urlBeer);

  if (!beer)
    return (
      <NotFound
        message={`Beer "${urlBeer}" doesn't seem to exist, try with another one`}
      />
    );

  const {
    image_url: image,
    ingredients: { malt, hops },
    method,
    ...rest
  } = beer;

  // Ambiguious requirement as method field is an object in the API
  const methodRows = Array.isArray(method) ? method : [method];

  return (
    <div className={style.main}>
      <BeerDetails image={image} {...rest} />
      <RowList title="Hops" type="hop" rows={hops} />
      <RowList title="Malts" type="malt" rows={malt} />
      <RowList title="Methods" type="method" rows={methodRows} />
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
