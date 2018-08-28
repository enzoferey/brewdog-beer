import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import registerServiceWorker from "./registerServiceWorker";

import Store from "./store";
import Routes from "./routes";

ReactDOM.render(
  <Store>
    <Routes />
  </Store>,
  document.getElementById("root")
);
registerServiceWorker();
