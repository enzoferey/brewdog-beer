import React from "react";
import PropTypes from "prop-types";
import style from "./method.scss";

const Method = ({ twist }) => <div className={style.main}>{twist}</div>;

Method.propTypes = {
  twist: PropTypes.string,
};

export default Method;
