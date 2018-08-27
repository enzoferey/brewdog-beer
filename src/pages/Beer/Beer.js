import React from "react";
import PropTypes from "prop-types";
import style from "./beer.scss";

import NotFound from "pages/NotFound";

import BeerDetails from "components/BeerDetails";
import RowList from "components/RowList";

const checkHops = hops => {
  // Get by type
  const findByTime = time => hops.filter(hop => hop.add === time);
  const startHops = findByTime("start");
  const middleHops = findByTime("middle");

  // Check them
  const hopDone = hop => hop.done;
  const startDone = startHops.every(hopDone);
  const middleDone = middleHops.every(hopDone);

  return {
    startDone,
    middleDone,
  };
};

const Beer = ({ beers, match, setHopDone, setMaltDone, setMethodDone }) => {
  const urlBeer = match.params.beerName;
  const beer = beers.find(beer => beer.name === urlBeer);

  if (!beer)
    return (
      <NotFound
        message={`Beer "${urlBeer}" doesn't seem to exist, try with another one`}
      />
    );

  // Get props of the beer
  const {
    image_url: image,
    ingredients: { malt, hops },
    method,
    ...rest
  } = beer;

  // Ambiguious requirement as method field is an object in the API
  const methodRows = Array.isArray(method) ? method : [method];

  // Get status of hops
  const { startDone, middleDone } = checkHops(hops);

  return (
    <div className={style.main}>
      <BeerDetails image={image} {...rest} />
      <RowList
        title="Hops"
        type="hop"
        rows={hops}
        startDone={startDone}
        middleDone={middleDone}
        setDone={hopIndex => setHopDone(beer.id, hopIndex)}
      />
      <RowList
        title="Malts"
        type="malt"
        rows={malt}
        setDone={maltIndex => setMaltDone(beer.id, maltIndex)}
      />
      <RowList
        title="Methods"
        type="method"
        rows={methodRows}
        setDone={methodIndex => setMethodDone(beer.id, methodIndex)}
      />
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
  setHopDone: PropTypes.func,
  setMaltDone: PropTypes.func,
  setMethodDone: PropTypes.func,
};

export default Beer;
