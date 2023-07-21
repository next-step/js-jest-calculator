import { ERROR_MESSAGE } from '../constants/errorMessage.js';
import { CALCULATOR_CONFIGURE } from '../constants/calculatorConfigure.js';

const isValueInRange = (operands, max, min) => operands.every((operand) => operand < max && operand > min);
const isValidNumber = (operands) => operands.every((operand) => typeof operand === 'number' && !Number.isNaN(operand));

export const validateCalculator = (...operands) => {
  const { NOT_NUMBER, OVER_MAX_LENGTH, REQUIRED_NUMBER } = ERROR_MESSAGE;
  const { MAX_NUMBER, MIN_NUMBER } = CALCULATOR_CONFIGURE;

  if (operands.length !== 2) {
    throw REQUIRED_NUMBER;
  }

  if (!isValidNumber(operands)) {
    throw NOT_NUMBER;
  }

  if (!isValueInRange(operands, MAX_NUMBER, MIN_NUMBER)) {
    throw OVER_MAX_LENGTH;
  }

  return true;
};
