import React from "react";
import PropTypes from "prop-types";
import style from "./mash-temperature.scss";

import temperatureIcon from "components/Table/temperature.png";

import getBeautifulTemp from "utils/getBeautifulTemp";

import { IconLabel } from "components/TableRow";

const MashTemperature = ({ index, value, unit, duration }) => (
  <div className={style.main}>
    <div className={style.indexContainer}>
      <span>{index}</span>
    </div>
    <IconLabel icon={temperatureIcon} label={getBeautifulTemp(value, unit)} />
    <span className={style.duration}>{`${duration}s`}</span>
  </div>
);

MashTemperature.propTypes = {
  index: PropTypes.number,
  value: PropTypes.number,
  unit: PropTypes.string,
  duration: PropTypes.number,
};

export default MashTemperature;
