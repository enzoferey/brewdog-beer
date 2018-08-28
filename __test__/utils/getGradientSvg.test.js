import getGradientSvg from "utils/getGradientSvg";
import theme from "theme";

const checkValue = (index, from, to) => {
  const result = getGradientSvg(index);
  expect(result.from).toBe(from);
  expect(result.to).toBe(to);
};

test("it should return SVG orange gradient when index is 0, 5, 10...", () => {
  checkValue(0, theme.gradientOrangeSvgFrom, theme.gradientOrangeSvgTo);
  checkValue(5, theme.gradientOrangeSvgFrom, theme.gradientOrangeSvgTo);
  checkValue(10, theme.gradientOrangeSvgFrom, theme.gradientOrangeSvgTo);
});

test("it should return SVG green gradient when index is 1, 6, 11...", () => {
  checkValue(1, theme.gradientGreenSvgFrom, theme.gradientGreenSvgTo);
  checkValue(6, theme.gradientGreenSvgFrom, theme.gradientGreenSvgTo);
  checkValue(11, theme.gradientGreenSvgFrom, theme.gradientGreenSvgTo);
});

test("it should return SVG purple gradient when index is 2, 7, 12...", () => {
  checkValue(2, theme.gradientPurpleSvgFrom, theme.gradientPurpleSvgTo);
  checkValue(7, theme.gradientPurpleSvgFrom, theme.gradientPurpleSvgTo);
  checkValue(12, theme.gradientPurpleSvgFrom, theme.gradientPurpleSvgTo);
});

test("it should return SVG blue gradient when index is 3, 8, 13...", () => {
  checkValue(3, theme.gradientBlueSvgFrom, theme.gradientBlueSvgTo);
  checkValue(8, theme.gradientBlueSvgFrom, theme.gradientBlueSvgTo);
  checkValue(13, theme.gradientBlueSvgFrom, theme.gradientBlueSvgTo);
});

test("it should return SVG yellow gradient when index is 4, 9, 14...", () => {
  checkValue(4, theme.gradientYellowSvgFrom, theme.gradientYellowSvgTo);
  checkValue(9, theme.gradientYellowSvgFrom, theme.gradientYellowSvgTo);
  checkValue(14, theme.gradientYellowSvgFrom, theme.gradientYellowSvgTo);
});
