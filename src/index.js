class Calculator {
  static ERRORS = {
    DIVIDE_BY_ZERO: { errorMessage: "0으로 나눌 수 없습니다" },
    INVALID_INPUT: {
      errorMessage: "한번에 최대 3자리 수까지 입력할 수 있습니다",
    },
    NOT_A_NUMBER: { errorMessage: "숫자가 아닙니다" },
  };

  #parseInput(input) {
    if (typeof input === "number") return input;

    const parsedNumber = Number(input);
    if (isNaN(parsedNumber)) {
      return Calculator.ERRORS.NOT_A_NUMBER;
    }
    return parsedNumber;
  }

  #validateNumberRange(num) {
    if (num < 0 || num > 999) {
      return Calculator.ERRORS.INVALID_INPUT;
    }
    return num;
  }

  #parseAndValidateInput(input) {
    const parsed = this.#parseInput(input);
    if (parsed.errorMessage) return parsed;

    return this.#validateNumberRange(parsed);
  }

  #prepareInputs(num1, num2) {
    num1 = this.#parseAndValidateInput(num1);
    num2 = this.#parseAndValidateInput(num2);
    if (num1.errorMessage || num2.errorMessage) return { ...num1, ...num2 };

    return [num1, num2];
  }

  add(num1, num2) {
    return Math.floor(num1 + num2);
  }

  subtract(num1, num2) {
    return Math.floor(num1 - num2);
  }

  multiply(num1, num2) {
    return Math.floor(num1 * num2);
  }

  divide(num1, num2) {
    if (num2 === 0) {
      return Calculator.ERRORS.DIVIDE_BY_ZERO;
    }
    return Math.floor(num1 / num2);
  }
}
