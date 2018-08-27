import React from "react";
import PropTypes from "prop-types";
import style from "./malt.scss";

const Malt = ({ name }) => <div className={style.main}>{name}</div>;

Malt.propTypes = {
  name: PropTypes.string,
};

export default Malt;
