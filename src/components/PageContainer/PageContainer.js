import React from "react";
import PropTypes from "prop-types";
import style from "./page-container.scss";

const PageContainer = ({ background, children }) => (
  <div style={{ backgroundColor: background }}>
    <div className={style.main}>{children}</div>
  </div>
);

PageContainer.propTypes = {
  background: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
PageContainer.defaultProps = {
  background: "white",
};

export default PageContainer;
