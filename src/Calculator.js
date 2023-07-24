class Calculator {
  #MAX_DIGITS = 1_000;

  sum(num1, num2) {
    if (!this.validate(num1, num2)) {
      throw new Error('숫자는 한번에 최대 3자리 수까지만 다룰 수 있습니다!');
    }

    return Math.floor(num1 + num2);
  }

  subtract(num1, num2) {
    if (!this.validate(num1, num2)) {
      throw new Error('숫자는 한번에 최대 3자리 수까지만 다룰 수 있습니다!');
    }

    return Math.floor(num1 - num2);
  }

  multiply(num1, num2) {
    if (!this.validate(num1, num2)) {
      throw new Error('숫자는 한번에 최대 3자리 수까지만 다룰 수 있습니다!');
    }

    return Math.floor(num1 * num2);
  }

  divide(num1, num2) {
    if (!this.validate(num1, num2)) {
      throw new Error('숫자는 한번에 최대 3자리 수까지만 다룰 수 있습니다!');
    }

    if (num2 === 0) {
      throw new Error('0으로 나눌 수는 없습니다!');
    }

    return Math.floor(num1 / num2);
  }

  validate(num1, num2) {
    return num1 < this.#MAX_DIGITS && num2 < this.#MAX_DIGITS;
  }
}

const calculator = new Calculator();

export default calculator;
