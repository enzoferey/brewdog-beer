import React from "react";
import Hop from "components/Hop";

const hop = mocks.beers[0].ingredients.hops[0];

test("renders correctly", () => {
  testSnapshot(<Hop {...hop} />);
});
