import getAbvLabel from "utils/getAbvLabel";

const checkValue = (abv, result) => {
  expect(getAbvLabel(abv)).toBe(result);
};

test("it should return parsed ABV correctly", () => {
  checkValue(5, "Alc. 5% By Vol.");
  checkValue(10, "Alc. 10% By Vol.");
});
