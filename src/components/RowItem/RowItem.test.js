import React from "react";
import ReactDOM from "react-dom";
import RowItem from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<RowItem />, div);
	ReactDOM.unmountComponentAtNode(div);
});