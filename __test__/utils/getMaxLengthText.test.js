import getMaxLengthText from "utils/getMaxLengthText";

const checkValue = (text, length, result) => {
  expect(getMaxLengthText(text, length)).toBe(result);
};

describe("when a single word is passed", () => {
  test("it should return the word", () => {
    checkValue("Hello", 3, "Hello");
    checkValue("Hello", 10, "Hello");
  });
});

describe("when the text length is less than the max length", () => {
  test("it should return the whole text", () => {
    checkValue("Hello how are you?", 100, "Hello how are you?");
  });
});

describe("when the text length is more than the max length", () => {
  test("it should return the text shortened at last word with a following (...)", () => {
    checkValue("Hello there", 8, "Hello (...)");
  });
});
