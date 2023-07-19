import MESSAGE from '../constants/Message';
import Validator from '../validator';

export const isCalculateError = (arg) => {
  const isTwoArguments = arg.length === 2;
  return Validator.isError(!isTwoArguments, MESSAGE.ARG_ERROR);
};
