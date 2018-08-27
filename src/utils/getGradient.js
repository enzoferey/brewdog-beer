import theme from "theme";

const gradients = [
  theme.gradientOrange,
  theme.gradientGreen,
  theme.gradientPurple,
  theme.gradientBlue,
  theme.gradientYellow,
];

const getGradient = index => {
  return gradients[index % 5];
};

export default getGradient;
