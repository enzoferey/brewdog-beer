import React from "react";
import Immutable from "immutable";
import axios from "axios";

import Store from "components/../store";
import Spinner from "pages/Spinner";

// Mock axios
jest.mock("axios");

const MyComponent = () => (
  <p>this a useless component to check children wrapping</p>
);

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <Store>
      <MyComponent />
    </Store>,
    { disableLifecycleMethods: true } // we don't want non await componentDidMount calls
  );

  jest.useFakeTimers();

  // Provide axios mocked response
  const resp = { data: mocks.beers };
  axios.get.mockResolvedValue(resp);
});

test("children are wrapped inside Context.Provider with the correct props", () => {
  wrapper.setState({ fetching: false });

  const context = wrapper.props().value;
  expect(context).toMatchObject({
    beers: [],
    setHopDone: wrapper.instance().setHopDone,
    setMaltDone: wrapper.instance().setMaltDone,
    setMethodDone: wrapper.instance().setMethodDone,
  });
});

describe("data fetching", () => {
  it("should fetch initially", () => {
    expect(wrapper.state("fetching")).toBe(true);
  });

  it("should start timeout for WAIT_TIME on mount", async () => {
    await wrapper.instance().componentDidMount();
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });

  it("should return null until WAIT_TIME (ms) has passed ", () => {
    expect(wrapper.type()).toBe(null);
  });

  it("should render a <Spinner /> after waiting WAIT_TIME", () => {
    wrapper.instance().setTimeoutSpinner();

    // finish timeout
    jest.runAllTimers();

    expect(wrapper.state("spinner")).toBe(true);
    expect(wrapper.find(Spinner).length).toBe(1);
  });

  it("should render `children` props like a HOC when not fetching", () => {
    wrapper.setState({ fetching: false });

    expect(wrapper.find(MyComponent).length).toBe(1);
  });

  describe("when API answers back", () => {
    it("should set `beers` state", async () => {
      await wrapper.instance().componentDidMount();

      expect(wrapper.state("fetching")).toBe(false);
    });

    it("should set `fetching` state to false", async () => {
      await wrapper.instance().componentDidMount();

      expect(wrapper.state("beers").size).toBeGreaterThan(0);
    });
  });
});

describe("beers manipulation", () => {
  describe("when a Hop is done", () => {
    it("should mark it as done", () => {
      wrapper.setState({ beers: Immutable.fromJS(mocks.beers) });

      // Set Hop done
      const beerIndex = 0;
      const beerId = mocks.beers[beerIndex].id;
      const hopIndex = mocks.beers[beerIndex].ingredients.hops.length - 1;
      wrapper.instance().setHopDone(beerId, hopIndex);

      // Get Hop
      const hop = wrapper
        .state("beers")
        .getIn([beerIndex, "ingredients", "hops", hopIndex]);
      expect(hop.get("done")).toBe(true);
    });
  });

  describe("when a Malt is done", () => {
    it("should mark it as done", () => {
      wrapper.setState({ beers: Immutable.fromJS(mocks.beers) });

      // Set Malt done
      const beerIndex = 0;
      const beerId = mocks.beers[beerIndex].id;
      const maltIndex = mocks.beers[beerIndex].ingredients.malt.length - 1;
      wrapper.instance().setMaltDone(beerId, maltIndex);

      // Get Malt
      const malt = wrapper
        .state("beers")
        .getIn([beerIndex, "ingredients", "malt", maltIndex]);
      expect(malt.get("done")).toBe(true);
    });
  });

  describe("when a Method is done", () => {
    beforeEach(() => {
      wrapper.setState({ beers: Immutable.fromJS(mocks.beers) });
    });

    describe("when the Method field is an object", () => {
      it("should mark it as done", () => {
        // Set Method done
        const beerIndex = 0;
        const beerId = mocks.beers[beerIndex].id;
        wrapper.instance().setMethodDone(beerId);

        // Get Method
        const method = wrapper.state("beers").getIn([beerIndex, "method"]);
        expect(method.get("done")).toBe(true);
      });
    });

    describe("when the Method field is an array", () => {
      it("should mark it as done", () => {
        // Set Method done
        const beerIndex = 1;
        const beerId = mocks.beers[beerIndex].id;
        const methodIndex = mocks.beers[beerIndex].method.length - 1;
        wrapper.instance().setMethodDone(beerId, methodIndex);

        // Get Method
        const method = wrapper
          .state("beers")
          .getIn([beerIndex, "method", methodIndex]);
        expect(method.get("done")).toBe(true);
      });
    });
  });
});
