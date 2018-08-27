import React from "react";
import PropTypes from "prop-types";
import style from "./malt.scss";

const Malt = ({ name, amount: { value, unit } }) => (
  <div className={style.main}>
    <p className={style.name}>{name}</p>
    <p className={style.amount}>{`${value} ${unit}`}</p>
  </div>
);

Malt.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.shape({
    value: PropTypes.number,
    unit: PropTypes.string,
  }),
};

export default Malt;
