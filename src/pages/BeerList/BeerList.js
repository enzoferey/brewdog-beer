import React from "react";
import PropTypes from "prop-types";
import style from "./beer-list.scss";

import { Link } from "react-router-dom";

import getGradient from "utils/getGradient";

import withBeers from "contexts/withBeers";

import PageContainer from "components/PageContainer";
import BeerListItem from "components/BeerListItem";

const BeerList = ({ beers }) => (
  <PageContainer>
    <h1 className={style.title}>Brewdog Beer</h1>
    <h3 className={style.quote}>
      “Extraordinary beers that blow people’s minds and kick start a
      revolution.”
    </h3>
    {beers.map(({ name, image_url, ...rest }, index) => (
      <Link key={name} to={name} className={style.link}>
        <BeerListItem
          background={getGradient(index)}
          name={name}
          image={image_url}
          {...rest}
        />
      </Link>
    ))}
  </PageContainer>
);

BeerList.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.object),
};

export default withBeers(BeerList);
