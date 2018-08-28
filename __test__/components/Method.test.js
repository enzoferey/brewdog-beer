import React from "react";
import Method from "components/Method";

const method = mocks.beers[0].method;

test("renders correctly", () => {
  testSnapshot(<Method {...method} />);
});
