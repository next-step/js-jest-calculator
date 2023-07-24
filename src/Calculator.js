class Calculator {
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

    return Math.floor(num1 / num2);
  }

  validate(num1, num2) {
    return num1 < 1000 && num2 < 1000;
  }
}

const calculator = new Calculator();

export default calculator;
