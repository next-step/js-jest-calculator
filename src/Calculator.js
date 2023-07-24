import { DIGITS, OPERATORS, ERROR_MESSAGES } from "./constants";

export class Calculator {
  a = null;
  b = null;
  operator = null;
  result = null;

  constructor() {}

  add(a, b) {
    this.#throwErrorWhenTypeIsNotNumber(a, b);
    return a + b;
  }
  minus(a, b) {
    this.#throwErrorWhenTypeIsNotNumber(a, b);
    return a - b;
  }
  multiply(a, b) {
    this.#throwErrorWhenTypeIsNotNumber(a, b);
    return a * b;
  }
  divide(a, b) {
    this.#throwErrorWhenTypeIsNotNumber(a, b);

    if (b === 0) {
      throw new Error(ERROR_MESSAGES.CAN_NOT_DIVIDE_ZERO_IN_DENOMINATOR);
    }

    return a / b;
  }

  pressNumber(aNumber) {
    if (this.#checkIsDigit(aNumber)) {
      throw Error(ERROR_MESSAGES.PRESS_ONLY_NUMBER);
    }
    if (this.#checkIsExceedMaximumInputNumbers(aNumber)) {
      throw Error(ERROR_MESSAGES.EXCEED_MAXIMUM_INPUT_NUMBERS);
    }
    if (this.operator) {
      this.b = Number((this.b || "") + String(aNumber));
      return;
    }

    this.a = Number((this.a || "") + String(aNumber));
  }

  pressOperator(aOperator) {
    if (this.#checkIsOperator(aOperator)) {
      throw Error(ERROR_MESSAGES.PRESS_ONLY_OPERATOR);
    }
    this.operator = aOperator;
  }

  pressResult() {
    this.result = {
      "+": this.add,
      "-": this.minus,
      "*": this.multiply,
      "/": this.divide,
    }[this.operator].call(this, this.a, this.b);

    this.showResult();
  }

  showResult() {
    return Math.floor(this.result);
  }

  #throwErrorWhenTypeIsNotNumber(...numbers) {
    if (!this.#checkTypeIsNumber(...numbers)) {
      throw Error(ERROR_MESSAGES.TYPE_IS_NOT_NUMBER);
    }
  }

  #checkTypeIsNumber(...numbers) {
    return numbers.every((aNumber) => typeof aNumber === "number");
  }

  #checkIsOperator(aOperator) {
    return !OPERATORS.includes(aOperator);
  }

  #checkIsDigit(aNumber) {
    return !DIGITS.includes(aNumber);
  }

  #checkIsExceedMaximumInputNumbers() {
    return (
      (String(this.a || "").length >= 3 && !this.operator) ||
      (String(this.b || "").length >= 3 && this.operator)
    );
  }
}
