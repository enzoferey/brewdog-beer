import React from "react";
import PropTypes from "prop-types";
import style from "./hop.scss";

const Hop = ({ name, amount: { value, unit }, add, attribute }) => (
  <div className={style.main}>
    <p className={style.name}>{name}</p>
    <p className={style.amount}>{`${value} ${unit}`}</p>
    <p className={style.time}>{add}</p>
    <p className={style.attribute}>{attribute}</p>
  </div>
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
