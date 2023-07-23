export const hasNumberOverLength = (numbers, length) => {
  const result = numbers.some((number) => {
    return Math.abs(number) / Math.pow(10, length) >= 1;
  });
  return result;
};

export const roundDown = (number) => {
  const roundDownString = String(number).split('.')[0];
  return roundDownString === '-0' ? 0 : Number(roundDownString);
};
