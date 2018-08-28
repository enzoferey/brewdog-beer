import React from "react";
import PropTypes from "prop-types";
import style from "./table-row-section.scss";

const TableRowSection = ({ flex, children }) => (
  <div style={{ flex }} className={style.main}>
    {children}
  </div>
);

TableRowSection.propTypes = {
  flex: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
TableRowSection.defaultProps = {
  flex: 1,
};

export default TableRowSection;
