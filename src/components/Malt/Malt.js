import React, { Fragment } from "react";
import PropTypes from "prop-types";
import style from "./malt.scss";

import weigthIcon from "components/Table/weight.png";

import TableRowSection from "components/TableRowSection";
import IconLabel from "components/IconLabel";

const Malt = ({ name, amount: { value, unit } }) => (
  <Fragment>
    <TableRowSection>
      <span className={style.name}>{name}</span>
    </TableRowSection>
    <TableRowSection>
      <IconLabel icon={weigthIcon} label={`${value} ${unit}`} />
    </TableRowSection>
  </Fragment>
);

Malt.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.shape({
    value: PropTypes.number,
    unit: PropTypes.string,
  }),
};

export default Malt;
