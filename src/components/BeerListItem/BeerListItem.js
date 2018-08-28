import React from "react";
import PropTypes from "prop-types";
import style from "./beer-list-item.scss";

import getAbvLabel from "utils/getAbvLabel";

const MAX_LENGTH_DESCRIPTION = 360;

const getMaxDescription = text => {
  if (text.length <= MAX_LENGTH_DESCRIPTION) {
    return text;
  }

  const subtext = text.substring(0, 360);
  const cleanSubtext = subtext
    .split(" ")
    .slice(0, -1) // get rid of last "half" words
    .join(" ");

  return `${cleanSubtext} (...)`;
};

const BeerListItem = ({ background, image, name, abv, description }) => (
  <div className={style.main} style={{ background }}>
    <div className={style.photo}>
      <img src={image} alt="Beer bottle image" />
    </div>
    <div className={style.details}>
      <h4 className={style.name}>{name}</h4>
      <span className={style.attributes}>{getAbvLabel(abv)}</span>
      <p className={style.description}>{getMaxDescription(description)}</p>
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
