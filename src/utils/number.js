export const hasNumberOverLength = (numbers, length) => {
  const result = numbers.some((number) => {
    return Math.abs(number) / Math.pow(10, length) >= 1;
  });
  return result;
};
