import React from "react";
import PropTypes from "prop-types";
import style from "./row-list.scss";

import uuid from "uuid/v4";

import RowItem from "components/RowItem";
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

const DefaultItem = props => <p>{JSON.stringify(props)}</p>;

const RowList = ({ title, type, rows }) => {
  const Item = getElement(type);

  return (
    <div className={style.main}>
      <h2 className={style.title}>{title}</h2>
      {rows.map(row => (
        <RowItem key={uuid()} item={<Item {...row} />} />
      ))}
    </div>
  );
};

RowList.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(["hop", "malt", "method"]),
  rows: PropTypes.arrayOf(PropTypes.object),
};

export default RowList;
