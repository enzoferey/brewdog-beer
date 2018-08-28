import React from "react";
import ReactDOM from "react-dom";
import TableRow from "./TableRow";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TableRow />, div);
  ReactDOM.unmountComponentAtNode(div);
});
