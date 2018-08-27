import React from "react";
import ReactDOM from "react-dom";
import MashTemperature from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<MashTemperature />, div);
	ReactDOM.unmountComponentAtNode(div);
});