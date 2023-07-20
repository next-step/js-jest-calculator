import ERROR_MESSAGE from '../constants/message';
import Validator from '../validator';

export const isCalculateError = (arg) => {
  const isTwoArguments = arg.length === 2;
  return Validator.isError(!isTwoArguments, ERROR_MESSAGE.ARG_ERROR);
};

export const isOrLessThanThreeDigits = (args) => {
  const isOrLessThanThreeDigits = args.some((number) => number > 999);
  return Validator.isError(isOrLessThanThreeDigits, ERROR_MESSAGE.DIGIT_ERROR);
};

export const genFloorValue = (value) => Math.floor(value);
