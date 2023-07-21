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
        default:
          return null;
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

  static subtract(first, second) {}

  static multiply(first, second) {}

  static divide(first, second) {}
}

export default Calculator;
