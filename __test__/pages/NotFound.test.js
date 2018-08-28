import React from "react";
import NotFound from "pages/NotFound";

const NotFoundRouter = withRouter(NotFound);

test("renders correctly", () => {
  testSnapshot(<NotFoundRouter />);
});

test("renders correctly `message` prop", () => {
  testSnapshot(<NotFoundRouter message="hello" />);
});
