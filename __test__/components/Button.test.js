import React from "react";
import Button from "components/Button";

let done = false;
const callback = jest.fn(() => {
  done = true;
});

const props = {
  done,
  delay: 0,
  waiting: false,
  callback,
  background: "pink",
};

// Fake setInterval
jest.useFakeTimers();

test("renders correctly", () => {
  testSnapshot(<Button {...props} />);
});

describe("click interation", () => {
  describe("when click for the firt time", () => {
    describe("if `delay` prop === 0", () => {
      const wrapper = shallow(<Button {...props} />);

      it("should just call the callback", () => {
        wrapper.simulate("click");
        expect(callback).toHaveBeenCalledTimes(1);
      });
    });

    describe("if `delay` prop > 0", () => {
      const delay = 10;
      const wrapper = shallow(<Button {...props} delay={delay} />);

      it("start the timer", () => {
        wrapper.simulate("click");
        expect(setInterval).toHaveBeenCalledTimes(1);
        expect(wrapper.state("countdown")).toBe(delay);

        jest.clearAllTimers();
      });
    });
  });
});

describe("countdown", () => {
  it("should decrease countdown by one every second", () => {
    const delay = 10;
    const wrapper = shallow(<Button {...props} delay={delay} />);

    // Activate countdown
    wrapper.simulate("click");

    // Fast-forward until next setInterval tick
    jest.runTimersToTime(1000);

    expect(wrapper.state("countdown")).toBe(delay - 1);
  });

  it("should call the callback prop when equals 0", () => {
    // Reset call times
    callback.mockClear();

    const delay = 3;
    const wrapper = shallow(<Button {...props} delay={delay} />);

    // Activate countdown
    wrapper.simulate("click");

    // Fast-forward until countdown is 0
    jest.runTimersToTime(delay * 1000);

    expect(wrapper.state("countdown")).toBe(0);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
