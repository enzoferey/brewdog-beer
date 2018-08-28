import React, { Fragment } from "react";
import PropTypes from "prop-types";
import style from "./icon-label.scss";

const IconLabel = ({ icon, label }) => (
  <Fragment>
    <img className={style.icon} src={icon} alt="" />
    <span className={style.label}>{label}</span>
  </Fragment>
);

IconLabel.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
};

export default IconLabel;
