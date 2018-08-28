import React from "react";
import IconLabel from "components/IconLabel";

const props = {
  icon: "src-path",
  label: "My label",
};

test("renders correctly", () => {
  testSnapshot(<IconLabel {...props} />);
});
