import React from "react";
import ReactDOM from "react-dom";
import TableRowSection from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<TableRowSection />, div);
	ReactDOM.unmountComponentAtNode(div);
});