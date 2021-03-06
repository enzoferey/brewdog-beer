import React from "react";
import PageContainer from "components/PageContainer";

const props = {
  background: "pink",
};

const MyText = () => <p>hi</p>;

test("renders correctly", () => {
  testSnapshot(<PageContainer />);
});

test("applies `background` prop correctly", () => {
  testSnapshot(<PageContainer {...props} />);
});

test("behaves like a HOC", () => {
  const wrapper = shallow(
    <PageContainer>
      <MyText />
    </PageContainer>
  );
  expect(wrapper.find(MyText).length).toBe(1);
});
