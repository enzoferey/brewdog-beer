const getMaxLengthText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }

  const subtext = text.substring(0, maxLength + 1);
  const words = subtext.split(" ");

  if (words.length === 1) return text;

  const cleanSubtext = words
    .slice(0, -1) // get rid of last "half" words
    .join(" ");

  return `${cleanSubtext} (...)`;
};

export default getMaxLengthText;
