import React from "react";
import PageContainer from "components/PageContainer";

const props = {
  background: "pink",
};

test("renders correctly", () => {
  testSnapshot(<PageContainer />);
});

test("applies `background` prop correctly", () => {
  testSnapshot(<PageContainer {...props} />);
});
