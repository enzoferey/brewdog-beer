import React from "react";
import ReactDOM from "react-dom";
import Method from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Method />, div);
	ReactDOM.unmountComponentAtNode(div);
});