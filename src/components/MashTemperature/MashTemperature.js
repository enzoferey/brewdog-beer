import React from "react";
import PropTypes from "prop-types";
import style from "./mash-temperature.scss";

const MashTemperature = ({ value, unit, duration }) => (
  <div className={style.main}>
    <p>{`${value} ${unit}`}</p>
    <p>{duration}</p>
  </div>
);

MashTemperature.propTypes = {
  value: PropTypes.number,
  unit: PropTypes.string,
  duration: PropTypes.number,
};

export default MashTemperature;
