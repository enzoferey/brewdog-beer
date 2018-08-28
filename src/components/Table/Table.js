import React from "react";
import PropTypes from "prop-types";
import style from "./table.scss";

import theme from "theme";

import TableRow from "components/TableRow";
import Hop from "components/Hop";
import Malt from "components/Malt";
import Method from "components/Method";

const getElement = type => {
  switch (type) {
    case "hop":
      return Hop;
    case "malt":
      return Malt;
    case "method":
      return Method;
    default:
      return DefaultItem;
  }
};

export const getWaiting = (type, time, startDone, middleDone) => {
  return (
    type === "hop" &&
    ((time === "middle" && !startDone) || (time === "end" && !middleDone))
  );
};

export const getDuration = (type, temperatures) => {
  if (type === "method") {
    return temperatures.reduce(
      (prev, temperature) => prev + temperature.duration,
      0
    );
  }

  return 0;
};

// Just a placeholder in case somethind else is passed
const DefaultItem = props => <p>{JSON.stringify(props)}</p>;

const Table = ({
  title,
  type,
  rows,
  startDone,
  middleDone,
  setDone,
  gradient,
}) => {
  const Item = getElement(type);

  return (
    <div className={style.main}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.table}>
        {rows.map((row, index) => {
          const waiting = getWaiting(type, row.add, startDone, middleDone);
          const duration = getDuration(type, row.mash_temp);
          const gradientButton = waiting ? theme.gradientGrey : gradient;
          return (
            <TableRow
              key={`${title}-row-${index}`}
              item={<Item {...row} />}
              done={row.done}
              duration={duration}
              waiting={waiting}
              callback={() => {
                setDone(index);
              }}
              gradientButton={gradientButton}
            />
          );
        })}
      </div>
    </div>
  );
};

Table.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(["hop", "malt", "method"]),
  rows: PropTypes.arrayOf(PropTypes.object),
  startDone: PropTypes.bool,
  middleDone: PropTypes.bool,
  setDone: PropTypes.func,
  gradient: PropTypes.string,
};

export default Table;
