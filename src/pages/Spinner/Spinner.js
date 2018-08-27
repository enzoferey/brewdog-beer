import React from "react";
import style from "./spinner.scss";

import Spinner from "components/Spinner";

const SpinnerPage = () => (
  <div className={style.main}>
    <Spinner />
  </div>
);

export default SpinnerPage;
