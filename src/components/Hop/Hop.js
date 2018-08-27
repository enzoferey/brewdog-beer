import React from "react";
import PropTypes from "prop-types";
import style from "./hop.scss";

const Hop = ({ name }) => <div className={style.main}>{name}</div>;

Hop.propTypes = {
  name: PropTypes.string,
};

export default Hop;
