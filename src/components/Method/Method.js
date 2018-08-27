import React from "react";
import PropTypes from "prop-types";
import style from "./method.scss";

import MashTemperature from "components/MashTemperature";

const Method = ({
  mash_temp: tempetures,
  fermentation: {
    temp: { value, unit },
  },
  twist,
}) => (
  <div className={style.main}>
    {tempetures.map(({ temp: { value, unit }, duration }, index) => (
      <MashTemperature
        key={`mash-${index}`}
        value={value}
        unit={unit}
        duration={duration}
      />
    ))}
    <p className={style.amount}>{`${value} ${unit}`}</p>
    <p className={style.twist}>{twist}</p>
  </div>
);

const TemperaturePropTypes = PropTypes.shape({
  value: PropTypes.number,
  unit: PropTypes.string,
});

Method.propTypes = {
  mash_temp: PropTypes.arrayOf(
    PropTypes.shape({
      temp: TemperaturePropTypes,
      duration: PropTypes.number,
    })
  ),
  fermentation: PropTypes.shape({
    temp: TemperaturePropTypes,
  }),
  twist: PropTypes.string,
};

export default Method;
