import React from "react";
import ReactDOM from "react-dom";
import Malt from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Malt />, div);
	ReactDOM.unmountComponentAtNode(div);
});