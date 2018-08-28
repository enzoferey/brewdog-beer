import React from "react";
import TableRowSection from "components/TableRowSection";

const props = {
  flex: 2,
};

const MyText = () => <p>hi</p>;

test("renders correctly", () => {
  testSnapshot(<TableRowSection />);
});

test("applies `flex` prop correctly", () => {
  testSnapshot(<TableRowSection {...props} />);
});

test("behaves like a HOC", () => {
  const wrapper = shallow(
    <TableRowSection>
      <MyText />
    </TableRowSection>
  );
  expect(wrapper.find(MyText).length).toBe(1);
});
