import React from "react";
import PropTypes from "prop-types";
import style from "./beer.scss";

import { Link } from "react-router-dom";

import backArrow from "./back-arrow.png";

import getGradientSVG from "utils/getGradientSVG";

import NotFound from "pages/NotFound";

import BeerDetails from "components/BeerDetails";
import RowList from "components/RowList";
import PageContainer from "components/PageContainer";
import Ovale from "components/Ovale";

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
  // Get the beer
  const urlBeer = match.params.beerName;
  const beerIndex = beers.findIndex(beer => beer.name === urlBeer);
  const beer = beers[beerIndex];

  // Show not found when no beer matches the name
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

  // Get its gradient
  const ovaleGradient = getGradientSVG(beerIndex);
  console.log(ovaleGradient);

  // Ambiguious requirement as method field is an object in the API
  const methodRows = Array.isArray(method) ? method : [method];

  // Get status of hops
  const { startDone, middleDone } = checkHops(hops);

  return (
    <PageContainer background={style.backgroundOverflow}>
      <div className={style.main}>
        <div className={style.ovale}>
          <Ovale {...ovaleGradient} />
        </div>
        <Link className={style.backIcon} to="/">
          <img src={backArrow} alt="Back arrow icon" />
          Back
        </Link>
        <div className={style.content}>
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
      </div>
    </PageContainer>
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
