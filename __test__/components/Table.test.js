import React from "react";
import Table from "components/Table";
import { getWaiting, getDuration } from "components/Table/Table";

const props = {
  title: "My title",
  type: "hop",
  rows: mocks.beers[0].ingredients.hops,
  startDone: false,
  middleDone: false,
  setDone: jest.fn(),
  gradient: "white",
};

test("renders correctly", () => {
  testSnapshot(<Table {...props} />);
});

const checkWaiting = (type, time, startDone, middleDone, result) => {
  expect(getWaiting(type, time, startDone, middleDone)).toBe(result);
};

describe("getWaiting()", () => {
  describe("when element is not a hop", () => {
    it("should return false", () => {
      checkWaiting("whatever", "start", true, true, false);
    });
  });
  describe("when element is a hop", () => {
    describe('when time field is "start"', () => {
      it("should return false", () => {
        checkWaiting("hop", "start", true, true, false);
      });
    });
    describe('when time field is "middle"', () => {
      it("should return true if startDone=false", () => {
        checkWaiting("hop", "middle", false, false, true);
      });
      it("should return false if startDone=true", () => {
        checkWaiting("hop", "middle", true, false, false);
      });
    });
    describe('when time field is "end"', () => {
      it("should return true if middleDone=false", () => {
        checkWaiting("hop", "end", true, false, true);
      });
      it("should return false if middleDone=true", () => {
        checkWaiting("hop", "end", true, true, false);
      });
    });
  });
});

const checkDuration = (type, temperatures, result) => {
  expect(getDuration(type, temperatures)).toBe(result);
};

describe("getDuration()", () => {
  describe("when element is not a method", () => {
    it("should return 0", () => {
      checkDuration("whatever", [], 0);
    });
  });
  describe("when element is a method", () => {
    it("should return the sum of the temperatures' durations, even when null values", () => {
      checkDuration("method", mocks.temperaturesSingle, 10);
      checkDuration("method", mocks.temperaturesNull, 10);
      checkDuration("method", mocks.temperaturesMultiple, 15);
    });
  });
});
