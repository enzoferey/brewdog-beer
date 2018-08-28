import React from "react";
import Malt from "components/Malt";

const malt = mocks.beers[0].ingredients.malt[0];

test("renders correctly", () => {
  testSnapshot(<Malt {...malt} />);
});
