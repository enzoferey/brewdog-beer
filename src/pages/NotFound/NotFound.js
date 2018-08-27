import React from "react";
import PropTypes from "prop-types";
import style from "./not-found.scss";

import { Link } from "react-router-dom";

const NotFound = ({ message }) => (
  <div className={style.main}>
    <h2>{message}</h2>
    <Link to="/">Go to Home</Link>
  </div>
);

NotFound.propTypes = {
  message: PropTypes.string,
};
NotFound.defaultProps = {
  message: "Woops, this page doesn't seem to exist",
};

export default NotFound;
