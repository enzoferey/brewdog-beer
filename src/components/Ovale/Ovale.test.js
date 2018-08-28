import React from "react";
import ReactDOM from "react-dom";
import Ovale from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Ovale />, div);
	ReactDOM.unmountComponentAtNode(div);
});