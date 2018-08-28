import React from "react";
import TableRow from "components/TableRow";

const MyText = () => <p>hi</p>;

const props = {
  item: <MyText />,
  done: false,
  duration: 10,
  waiting: false,
  callback: jest.fn(),
  gradientButton: "white",
};

test("renders correctly", () => {
  testSnapshot(<TableRow {...props} />);
});
