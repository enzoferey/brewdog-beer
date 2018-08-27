import React from "react";
import PropTypes from "prop-types";
import style from "./beer-list.scss";

import { Link } from "react-router-dom";

import BeerDetails from "components/BeerDetails";
import PageContainer from "components/PageContainer";

const BeerList = ({ beers }) => (
  <PageContainer>
    {beers.map(({ name, image_url, ...rest }) => (
      <Link key={name} to={name} className={style.link}>
        <div className={style.beerContainer}>
          <BeerDetails name={name} image={image_url} {...rest} />
        </div>
      </Link>
    ))}
  </PageContainer>
);

BeerList.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.object),
};

export default BeerList;
