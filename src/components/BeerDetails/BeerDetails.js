import React from "react";
import PropTypes from "prop-types";
import style from "./beer-details.scss";

import PageContainer from "components/PageContainer";

const BeerDetails = ({ image, name, abv, description }) => (
  <PageContainer>
    <div className={style.details}>
      <img src={image} alt="" />
      <h2>{name}</h2>
      <h4>{`${abv}%`}</h4>
      <p>{description}</p>
    </div>
  </PageContainer>
);

BeerDetails.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  abv: PropTypes.number,
  description: PropTypes.string,
};

export default BeerDetails;
