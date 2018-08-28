import React from "react";
import { Beer } from "pages/Beer";
import NotFound from "pages/NotFound";

const BeerRouter = withRouter(Beer);

test("renders correctly", () => {
  testSnapshot(
    <BeerRouter
      beers={mocks.beers}
      match={{ params: { beerName: mocks.beers[0].name } }}
    />
  );
});

test("renders NotFound when unkown beer name", () => {
  const wrapper = shallow(
    <BeerRouter
      beers={mocks.beers}
      match={{ params: { beerName: "this beer doesn't exist" } }}
    />
  );

  expect(
    wrapper
      .find(Beer)
      .dive()
      .find(NotFound).length
  ).toBe(1);
});
