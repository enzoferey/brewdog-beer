import getBeautifulTemp from "utils/getBeautifulTemp";

const checkValue = (value, unit, result) => {
  expect(getBeautifulTemp(value, unit)).toBe(result);
};

test("it should return parsed value for celcius unit", () => {
  checkValue(19, "celsius", "19ºC");
});

test("it should return value followed by the unit in other cases", () => {
  checkValue(20, "farenheit", "20 farenheit");
  checkValue(21, "whatever", "21 whatever");
});
