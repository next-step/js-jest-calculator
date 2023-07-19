export class Calculator {
  a = null;
  b = null;
  operator = null;
  result = null;

  constructor() {}

  add(a, b) {
    this.#checkNumber(a, b);
    this.result = a + b;
  }
  minus(a, b) {
    this.#checkNumber(a, b);
    this.result = a - b;
  }
  multiply(a, b) {
    this.#checkNumber(a, b);
    this.result = a * b;
  }
  divide(a, b) {
    this.#checkNumber(a, b);
    this.result = a / b;
  }

  pressNumber(aNumber) {
    if (!DIGITS.includes(aNumber)) {
      throw Error(ERROR_MESSAGES.PRESS_ONLY_NUMBER);
    }

    let existNumber = this.operator ? this.b : this.a;
    existNumber = (existNumber ?? "") + String(aNumber);

    if (existNumber.length > 3) {
      throw Error(ERROR_MESSAGES.EXCEED_MAXIMUM_INPUT_NUMBERS);
    }

    if (this.operator) {
      this.b = +existNumber;
    } else {
      this.a = +existNumber;
    }
  }

  pressOperator(aOperator) {
    if (!["*", "/", "+", "%", "-"].includes(aOperator)) {
      throw Error(ERROR_MESSAGES.PRESS_ONLY_OPERATOR);
    }
    this.operator = aOperator;
  }

  showResult() {
    return Math.floor(this.result);
  }

  #checkNumber(...numbers) {
    for (let aNumber of numbers) {
      if (typeof aNumber !== "number") {
        throw Error(ERROR_MESSAGES.NOT_TYPE_NUMBER);
      }
    }

    return numbers;
  }
}

const ERROR_MESSAGES = {
  EXCEED_MAXIMUM_INPUT_NUMBERS:
    "숫자는 한번에 최대 3자리 수까지만 다룰 수 있습니다.",
  PRESS_ONLY_NUMBER: "숫자를 입력해주세요.",
  PRESS_ONLY_OPERATOR: "연산자를 입력해주세요.",
};

const DIGITS = Array(10)
  .fill(0)
  .map((v, i) => v + i);
