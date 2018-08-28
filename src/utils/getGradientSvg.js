import theme from "theme";

const gradients = [
  { from: theme.gradientOrangeSvgFrom, to: theme.gradientOrangeSvgTo },
  { from: theme.gradientGreenSvgFrom, to: theme.gradientGreenSvgTo },
  { from: theme.gradientPurpleSvgFrom, to: theme.gradientPurpleSvgTo },
  { from: theme.gradientBlueSvgFrom, to: theme.gradientBlueSvgTo },
  { from: theme.gradientYellowSvgFrom, to: theme.gradientYellowSvgTo },
];

const getGradientSvg = index => {
  return gradients[index % 5];
};

export default getGradientSvg;
