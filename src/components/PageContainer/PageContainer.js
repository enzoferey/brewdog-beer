import React from "react";
import PropTypes from "prop-types";
import style from "./page-container.scss";

const PageContainer = ({ children }) => (
  <div className={style.main}>{children}</div>
);

PageContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default PageContainer;
