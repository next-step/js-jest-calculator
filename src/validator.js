import { MAX_VALUE } from './constants/calculatorRule';
import { ERROR_MESSAGE } from './constants/message';
import { OPERATIONS } from './constants/operations';

class Validator {
  validate(first, second, operation) {
    this.isInvalidFormula(first, second, operation);
    this.isInvalidOperand(first, second);
    this.isInvalidOperation(operation);
    this.isOverDigit(first, second);
  }

  isInvalidFormula(first, second, operation) {
    if (!first || !second || !operation) {
      throw ERROR_MESSAGE.INVALID_FORMULA;
    }
  }

  isOverDigit(first, second) {
    if (first > MAX_VALUE || first - 1 < -MAX_VALUE || second > MAX_VALUE || second - 1 < -MAX_VALUE) {
      throw ERROR_MESSAGE.OVER_MAX_DIGIT;
    }
  }

  isInvalidOperation(operation) {
    const validOperands = Object.values(OPERATIONS);
    if (!validOperands.includes(operation)) {
      throw ERROR_MESSAGE.INVALID_OPERATION;
    }
  }

  isInvalidOperand(first, second) {
    if (typeof first !== 'number' || typeof second !== 'number') {
      throw ERROR_MESSAGE.INVALID_OPERAND;
    }
  }
}

export default Validator;
