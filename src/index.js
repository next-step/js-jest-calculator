class Calculator {
  valid(a, b) {
    [a, b].forEach((num) => {
      if (num.toString().length > 3) {
        throw new Error("숫자는 최대 3자리까지만 작성 가능하다.");
      }
    });
  }
  sum(a, b) {
    this.valid(a, b);

    return a + b;
  }
  subtract(a, b) {
    this.valid(a, b);

    return a - b;
  }
  multiply(a, b) {
    this.valid(a, b);

    return a * b;
  }
  divide(a, b) {
    this.valid(a, b);

    if (b === 0) {
      throw new Error("b는 0이 될 수 없습니다.");
    }
    return Math.trunc(a / b);
  }
}

export default Calculator;
