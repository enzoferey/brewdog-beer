import React from "react";
import PropTypes from "prop-types";
import style from "./beer-details.scss";

import getAbvLabel from "utils/getAbvLabel";

const BeerDetails = ({ image, name, abv, description }) => (
  <div className={style.details}>
    <img className={style.photo} src={image} alt="Beer bottle image" />
    <h2 className={style.name}>{name}</h2>
    <h4 className={style.attributes}>{getAbvLabel(abv)}</h4>
    <p className={style.description}>{description}</p>
  </div>
);

BeerDetails.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  abv: PropTypes.number,
  description: PropTypes.string,
};

export default BeerDetails;
