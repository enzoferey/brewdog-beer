import React from "react";
import PropTypes from "prop-types";
import style from "./table-row.scss";

import Button from "components/Button";

const TableRow = ({
  item,
  done,
  duration,
  waiting,
  callback,
  gradientButton,
}) => (
  <div className={style.main}>
    {item}
    <div className={style.button}>
      <Button
        done={done}
        delay={duration}
        waiting={waiting}
        callback={callback}
        background={gradientButton}
      />
    </div>
  </div>
);

TableRow.propTypes = {
  item: PropTypes.element,
  ...Button.propTypes,
};

export default TableRow;
