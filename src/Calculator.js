export class Calculator {
  a = null;
  b = null;
  operator = null;
  result = null;

  constructor() {}

  add(a, b) {
    this.#checkTypeIsNumber(a, b);
    this.result = a + b;
  }
  minus(a, b) {
    this.#checkTypeIsNumber(a, b);
    this.result = a - b;
  }
  multiply(a, b) {
    this.#checkTypeIsNumber(a, b);
    this.result = a * b;
  }
  divide(a, b) {
    this.#checkTypeIsNumber(a, b);
    this.result = a / b;
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
    }[this.operator](this.a, this.b);
  }

  showResult() {
    return Math.floor(this.result);
  }

  #checkTypeIsNumber(...numbers) {
    for (let aNumber of numbers) {
      if (typeof aNumber !== "number") {
        throw Error(ERROR_MESSAGES.NOT_TYPE_NUMBER);
      }
    }

    return numbers;
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

const ERROR_MESSAGES = {
  EXCEED_MAXIMUM_INPUT_NUMBERS:
    "숫자는 한번에 최대 3자리 수까지만 다룰 수 있습니다.",
  PRESS_ONLY_NUMBER: "숫자를 입력해주세요.",
  PRESS_ONLY_OPERATOR: "연산자를 입력해주세요.",
};

const OPERATORS = ["*", "/", "+", "%", "-"];

const DIGITS = Array(10)
  .fill(0)
  .map((v, i) => v + i);
