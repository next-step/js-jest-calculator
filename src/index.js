import { ERROR_MESSAGE } from './constants/message';
import { OPERATIONS } from './constants/operations';
import { decimalPointRemover } from './utils';
import Validator from './validator';

const sum = (first, second) => first + second;
const subtract = (first, second) => first - second;
const multiply = (first, second) => first * second;
const divide = (first, second) => first / second;

class Calculator {
  calculate(first, second, operation) {
    let result = null;
    try {
      Validator.validate(first, second, operation);
      switch (operation) {
        case OPERATIONS.PLUS:
          result = sum(first, second);
          break;
        case OPERATIONS.MINUS:
          result = subtract(first, second);
          break;
        case OPERATIONS.TIMES:
        case OPERATIONS.TIMES_CROSS:
        case OPERATIONS.TIMES_CROSS_UPPERCASE:
          result = multiply(first, second);
          break;
        case OPERATIONS.DIVISION:
        case OPERATIONS.DIVISION_SLASH:
          result = divide(first, second);
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
}

export default Calculator;
