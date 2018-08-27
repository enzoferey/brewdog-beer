import React from "react";
import ReactDOM from "react-dom";
import Hop from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Hop />, div);
	ReactDOM.unmountComponentAtNode(div);
});