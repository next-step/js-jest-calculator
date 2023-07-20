import ERROR_MESSAGE from './constants/message';
import { CALCULATE_COMMAND } from './constants/commands';
import {
  genFloorValue,
  isCalculateError,
  isOrLessThanThreeDigits,
} from './utils';

class Calculator {
  #confirmError(args) {
    try {
      if (isCalculateError(args)) {
        const calculateErrorMessage = isCalculateError(args);
        throw calculateErrorMessage;
      }
      if (isOrLessThanThreeDigits(args)) {
        const digitErrorMessage = isOrLessThanThreeDigits(args);
        throw digitErrorMessage;
      }
    } catch (errorMessage) {
      throw new Error(errorMessage);
    }
  }

  #calculate(type, args) {
    const [a, b] = args;
    switch (type) {
      case CALCULATE_COMMAND.ADD:
        return a + b;
      case CALCULATE_COMMAND.SUBTRACT:
        return a - b;
      case CALCULATE_COMMAND.MULTIPLY:
        return a * b;
      case CALCULATE_COMMAND.DIVIDE:
        return genFloorValue(a / b);
      default:
        return;
    }
  }

  #calculateAfterConfirm(args, type) {
    this.#confirmError(args);
    return this.#calculate(type, args);
  }

  add(...args) {
    return this.#calculateAfterConfirm(args, CALCULATE_COMMAND.ADD);
  }

  subtract(...args) {
    return this.#calculateAfterConfirm(args, CALCULATE_COMMAND.SUBTRACT);
  }

  multiply(...args) {
    return this.#calculateAfterConfirm(args, CALCULATE_COMMAND.MULTIPLY);
  }

  divide(...args) {
    return this.#calculateAfterConfirm(args, CALCULATE_COMMAND.DIVIDE);
  }
}

export default Calculator;
