import { ERROR_MESSAGE } from '../constants/errorMessage.js';
import { CALCULATOR_CONFIGURE } from '../constants/calculatorConfigure.js';

const isValueInRange = (operands, max, min) => operands.every((operand) => operand < max && operand > min);
const isValidNumber = (operands) => operands.every((operand) => typeof operand === 'number' && !Number.isNaN(operand));

export const validateCalculator = (operator, ...operands) => {
  const { NOT_NUMBER, OVER_RANGE, REQUIRED_NUMBER, NOT_DIVIDE_ZERO } = ERROR_MESSAGE;
  const { MAX_NUMBER, MIN_NUMBER } = CALCULATOR_CONFIGURE;

  if (operands.length !== 2) {
    throw REQUIRED_NUMBER;
  }

  if (!isValidNumber(operands)) {
    throw NOT_NUMBER;
  }

  if (!isValueInRange(operands, MAX_NUMBER, MIN_NUMBER)) {
    throw OVER_RANGE;
  }

  if (operator.name === 'divide' && operands[1] === 0) {
    throw NOT_DIVIDE_ZERO;
  }

  return true;
};
