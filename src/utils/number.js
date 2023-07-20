export const hasNumberOverGivenDigit = (numbers, digit) => {
  if (numbers) {
  }

  const result = numbers.some((number) => String(number).length > digit);
  return result;
};
