export const decimalPointRemover = (value) => {
  if (value >= 0) return Math.floor(value);
  return Math.ceil(value);
};
