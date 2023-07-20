import { ERROR_MESSAGE } from '../constants/errorMessage.js';
import { CALCULATOR_CONFIGURE } from '../constants/calculatorConfigure.js';

export const validateCalculator = (first, second) => {
  const { NOT_NUMBER, OVER_MAX_LENGTH, REQUIRED_NUMBER } = ERROR_MESSAGE;
  const { MAX_NUMBER } = CALCULATOR_CONFIGURE;

  if (!first || !second) {
    return {
      success: false,
      message: REQUIRED_NUMBER
    };
  }

  if (typeof first !== 'number' || typeof second !== 'number') {
    return {
      success: false,
      message: NOT_NUMBER
    };
  }

  if (first > MAX_NUMBER || second > MAX_NUMBER) {
    return {
      success: false,
      message: OVER_MAX_LENGTH
    };
  }

  return {
    success: true,
    message: 'success'
  };
};
