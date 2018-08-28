const getBeautifulTemp = (value, unit) =>
  `${value}${unit === "celsius" ? "ºC" : ` ${unit}`}`;

export default getBeautifulTemp;
