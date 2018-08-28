import React from "react";
import PropTypes from "prop-types";
import style from "./beer.scss";

import { Link } from "react-router-dom";

import backArrow from "./back-arrow.png";

import getGradientSvg from "utils/getGradientSvg";
import getGradient from "utils/getGradient";
import checkHops from "utils/checkHops";

import NotFound from "pages/NotFound";

import PageContainer from "components/PageContainer";
import Ovale from "components/Ovale";
import BeerDetails from "components/BeerDetails";
import Table from "components/Table";

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
  const ovaleGradient = getGradientSvg(beerIndex);
  const gradient = getGradient(beerIndex);

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
          <Table
            title="Hops"
            type="hop"
            rows={hops}
            startDone={startDone}
            middleDone={middleDone}
            setDone={hopIndex => setHopDone(beer.id, hopIndex)}
            gradient={gradient}
          />
          <Table
            title="Malts"
            type="malt"
            rows={malt}
            setDone={maltIndex => setMaltDone(beer.id, maltIndex)}
            gradient={gradient}
          />
          <Table
            title="Methods"
            type="method"
            rows={methodRows}
            setDone={methodIndex => setMethodDone(beer.id, methodIndex)}
            gradient={gradient}
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
