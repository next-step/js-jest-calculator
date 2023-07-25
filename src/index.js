class Calculator {
  static ERRORS = {
    DIVIDE_BY_ZERO: { errorMessage: "0으로 나눌 수 없습니다" },
  };

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
