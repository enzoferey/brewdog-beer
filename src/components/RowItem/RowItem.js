import React from "react";
import PropTypes from "prop-types";
import style from "./row-item.scss";

import Button from "components/Button";

const RowItem = ({ item }) => (
  <div className={style.main}>
    {item}
    <Button />
  </div>
);

RowItem.propTypes = {
  item: PropTypes.element,
};

export default RowItem;
