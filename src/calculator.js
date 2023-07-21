import { ERROR_MESSAGE } from './constants/message';
import { OPERATIONS } from './constants/operations';
import { decimalPointRemover } from './utils';
import Validator from './validator';

class Calculator {
  static calculate(first, second, operation) {
    let result = null;
    try {
      Validator.validate(first, second, operation);
      switch (operation) {
        case OPERATIONS.PLUS:
          result = this.sum(first, second);
          break;
        case OPERATIONS.MINUS:
          result = this.subtract(first, second);
          break;
        case OPERATIONS.TIMES:
        case OPERATIONS.TIMES_CROSS:
        case OPERATIONS.TIMES_CROSS_UPPERCASE:
          result = this.multiply(first, second);
          break;
        case OPERATIONS.DIVISION:
        case OPERATIONS.DIVISION_SLASH:
          result = this.divide(first, second);
          break;
        default:
          throw ERROR_MESSAGE.ERROR_OCCURRED_IN_CALCULATION;
      }
    } catch (err) {
      throw new Error(err);
    }
    result = decimalPointRemover(result);
    return result;
  }

  static sum(first, second) {
    return first + second;
  }

  static subtract(first, second) {
    return first - second;
  }

  static multiply(first, second) {
    return first * second;
  }

  static divide(first, second) {
    return first / second;
  }
}

export default Calculator;
