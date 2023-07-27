import { ERROR_MESSAGES } from "./constants";

export default class Calculator {
  handleInvalidNumbers(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error(ERROR_MESSAGES.MUST_BE_NUM_TYPE);
    }
    if (String(num1).length > 3 || String(num2).length > 3) {
      throw new Error(ERROR_MESSAGES.EXCEED_MAX_LENGTH);
    }
  }

  sum(num1, num2) {
    this.handleInvalidNumbers(num1, num2);

    return Math.floor(num1 + num2);
  }

  substract(num1, num2) {
    this.handleInvalidNumbers(num1, num2);

    return Math.floor(num1 - num2);
  }

  multiply(num1, num2) {
    this.handleInvalidNumbers(num1, num2);

    return Math.floor(num1 * num2);
  }

  divide(num1, num2) {
    this.handleInvalidNumbers(num1, num2);

    if (num2 === 0) throw new Error(ERROR_MESSAGES.CANT_DIVIDE_BY_ZERO);
    
    return Math.floor(num1 / num2);
  }
}