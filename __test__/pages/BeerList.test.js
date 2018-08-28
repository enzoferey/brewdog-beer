import React from "react";
import BeerList from "pages/BeerList";

const BeerListRouter = withRouter(BeerList);

test("renders correctly", () => {
  testSnapshot(<BeerListRouter beers={mocks} />);
});
