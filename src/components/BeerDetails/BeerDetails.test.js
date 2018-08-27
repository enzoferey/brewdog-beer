import React from "react";
import ReactDOM from "react-dom";
import BeerDetails from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<BeerDetails />, div);
	ReactDOM.unmountComponentAtNode(div);
});