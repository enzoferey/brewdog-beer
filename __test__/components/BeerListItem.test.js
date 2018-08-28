import React from "react";
import BeerListItem from "components/BeerListItem";

const props = {
  background: "pink",
  image: "src-path",
  name: "Beer name",
  abv: 5,
  description: "Lorem ipmsum",
};

test("renders correctly", () => {
  testSnapshot(<BeerListItem {...props} />);
});
