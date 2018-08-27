import React from "react";
import PropTypes from "prop-types";
import style from "./row-item.scss";

import Button from "components/Button";

const RowItem = ({ item, done, duration, waiting, callback }) => (
  <div className={style.main}>
    {item}
    <Button
      done={done}
      delay={duration}
      waiting={waiting}
      callback={callback}
    />
  </div>
);

RowItem.propTypes = {
  item: PropTypes.element,
  ...Button.propTypes,
};

export default RowItem;
