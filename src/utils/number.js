export const hasNumberOverLength = (numbers, length) => {
  const result = numbers.some((number) => String(number).length > length);
  return result;
};
