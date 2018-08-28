import React from "react";
import PropTypes from "prop-types";
import style from "./ovale.scss";

const Ovale = ({ from, to }) => (
  <svg
    className={style.main}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1445.797 391.5"
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="0.061"
        x2="1.479"
        y2="1.666"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stopColor={from} />
        <stop offset="1" stopColor={to} />
      </linearGradient>
    </defs>
    <path
      fill="url(#linear-gradient)"
      d="M722.9,0c399.246,0,722.9,175.281,722.9,391.5H0C0,175.281,323.653,0,722.9,0Z"
      transform="translate(1445.797 391.5) rotate(180)"
    />
  </svg>
);

Ovale.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
};

export default Ovale;
