import React from "react";
import PropTypes from "prop-types";
import style from "./beer-list-item.scss";

import getAbvLabel from "utils/getAbvLabel";
import getMaxLengthText from "utils/getMaxLengthText";

const MAX_LENGTH_DESCRIPTION = 360;

const BeerListItem = ({ background, image, name, abv, description }) => (
  <div className={style.main} style={{ background }}>
    <div className={style.photo}>
      <img src={image} alt="Beer bottle image" />
    </div>
    <div className={style.details}>
      <h4 className={style.name}>{name}</h4>
      <span className={style.attributes}>{getAbvLabel(abv)}</span>
      <p className={style.description}>
        {getMaxLengthText(description, MAX_LENGTH_DESCRIPTION)}
      </p>
    </div>
  </div>
);

BeerListItem.propTypes = {
  background: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  abv: PropTypes.number,
  description: PropTypes.string,
};

export default BeerListItem;
