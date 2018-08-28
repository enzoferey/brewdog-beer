import React, { Fragment } from "react";
import PropTypes from "prop-types";
import style from "./method.scss";

import fermentationIcon from "components/Table/fermentation.png";

import getBeautifulTemp from "utils/getBeautifulTemp";

import TableRowSection from "components/TableRowSection";
import { IconLabel } from "components/TableRow";
import MashTemperature from "components/MashTemperature";

const Method = ({
  mash_temp: tempetures,
  fermentation: {
    temp: { value, unit },
  },
  twist,
}) => (
  <Fragment>
    <TableRowSection>
      <div className={style.temperatures}>
        {tempetures.map(({ temp: { value, unit }, duration }, index) => (
          <MashTemperature
            key={`mash-${index}`}
            index={index + 1}
            value={value}
            unit={unit}
            duration={duration}
          />
        ))}
      </div>
    </TableRowSection>
    <TableRowSection>
      <IconLabel
        icon={fermentationIcon}
        label={getBeautifulTemp(value, unit)}
      />
    </TableRowSection>
    <TableRowSection flex={2}>
      <p className={style.twist}>{twist ? twist : "-"}</p>
    </TableRowSection>
  </Fragment>
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
