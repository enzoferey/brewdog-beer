import React from "react";
import PropTypes from "prop-types";
import style from "./table-row-section.scss";

const TableRowSection = ({ children }) => (
  <div className={style.main}>{children}</div>
);

TableRowSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default TableRowSection;
