import { MAX_ARGUMENT_LENGTH, MAX_DIGIT_NUMBER, ZERO } from '../constants';
import ERROR_MESSAGE from '../constants/message';
import Validator from '../validator';

export const isCalculateError = (arg) => {
  const isTwoArguments = arg.length === MAX_ARGUMENT_LENGTH;
  return Validator.isError(!isTwoArguments, ERROR_MESSAGE.ARG_ERROR);
};

export const isOrLessThanThreeDigits = (args) => {
  const isOrLessThanThreeDigits = args.some(
    (number) => number > MAX_DIGIT_NUMBER
  );
  return Validator.isError(isOrLessThanThreeDigits, ERROR_MESSAGE.DIGIT_ERROR);
};

export const genFloorValue = (value) =>
  value < ZERO ? Math.ceil(value) : Math.floor(value);
