import MESSAGE from './constants/Message';
import { CALCULATE_COMMAND } from './constants/commands';
import {
  genFloorValue,
  isCalculateError,
  isOrLessThanThreeDigits,
} from './utils';

class Calulator {
  #confirmError(args) {
    if (isCalculateError(args)) return MESSAGE.ARG_ERROR;
    if (isOrLessThanThreeDigits(args)) return MESSAGE.DIGIT_ERROR;
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
    const errorMessage = this.#confirmError(args);
    if (errorMessage) return errorMessage;
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

export default Calulator;
