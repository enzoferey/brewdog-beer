import React from "react";
import MashTemperature from "components/MashTemperature";

const props = {
  index: 1,
  value: 19,
  unit: "celsius",
};

const propsDuration = {
  ...props,
  duration: 10,
};

test("renders correctly", () => {
  testSnapshot(<MashTemperature {...propsDuration} />);
});

test("doesn't display a duration when no `duration` props", () => {
  const wrapper = shallow(<MashTemperature {...props} />);
  expect(wrapper.children().length).toBe(2);
});
