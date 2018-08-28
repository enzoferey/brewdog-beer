import getGradient from "utils/getGradient";
import theme from "theme";

const checkValue = (index, result) => {
  expect(getGradient(index)).toBe(result);
};

test("it should return orange gradient when index is 0, 5, 10...", () => {
  checkValue(0, theme.gradientOrange);
  checkValue(5, theme.gradientOrange);
  checkValue(10, theme.gradientOrange);
});

test("it should return green gradient when index is 1, 6, 11...", () => {
  checkValue(1, theme.gradientGreen);
  checkValue(6, theme.gradientGreen);
  checkValue(11, theme.gradientGreen);
});

test("it should return purple gradient when index is 2, 7, 12...", () => {
  checkValue(2, theme.gradientPurple);
  checkValue(7, theme.gradientPurple);
  checkValue(12, theme.gradientPurple);
});

test("it should return blue gradient when index is 3, 8, 13...", () => {
  checkValue(3, theme.gradientBlue);
  checkValue(8, theme.gradientBlue);
  checkValue(13, theme.gradientBlue);
});

test("it should return yellow gradient when index is 4, 9, 14...", () => {
  checkValue(4, theme.gradientYellow);
  checkValue(9, theme.gradientYellow);
  checkValue(14, theme.gradientYellow);
});
