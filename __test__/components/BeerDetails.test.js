import React from "react";
import BeerDetails from "components/BeerDetails";

const props = {
  image: "src-path",
  name: "Beer name",
  abv: 5,
  description: "Lorem ipmsum",
};

test("renders correctly", () => {
  testSnapshot(<BeerDetails {...props} />);
});
