import React from "react";
import ReactDOM from "react-dom";
import BeerListItem from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<BeerListItem />, div);
	ReactDOM.unmountComponentAtNode(div);
});