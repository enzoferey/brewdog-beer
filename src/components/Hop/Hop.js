import React, { Fragment } from "react";
import PropTypes from "prop-types";
import style from "./hop.scss";

import weigthIcon from "components/Table/weight.png";
import timeIcon from "components/Table/time.png";
import labelIcon from "components/Table/label.png";

import TableRowSection from "components/TableRowSection";
import IconLabel from "components/IconLabel";

const Hop = ({ name, amount: { value, unit }, add, attribute }) => (
  <Fragment>
    <TableRowSection>
      <span className={style.name}>{name}</span>
    </TableRowSection>
    <TableRowSection>
      <IconLabel icon={weigthIcon} label={`${value} ${unit}`} />
    </TableRowSection>
    <TableRowSection>
      <IconLabel icon={timeIcon} label={add} />
    </TableRowSection>
    <TableRowSection>
      <IconLabel icon={labelIcon} label={attribute} />
    </TableRowSection>
  </Fragment>
);

Hop.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.shape({
    value: PropTypes.number,
    unit: PropTypes.string,
  }),
  add: PropTypes.oneOf(["start", "middle", "end"]),
  attribute: PropTypes.string,
};

export default Hop;
