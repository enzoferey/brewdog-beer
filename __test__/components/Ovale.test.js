import React from "react";
import Ovale from "components/Ovale";

const props = {
  from: "white",
  to: "black",
};

test("renders correctly with a gradient from `from` to `to` props", () => {
  testSnapshot(<Ovale {...props} />);
});
