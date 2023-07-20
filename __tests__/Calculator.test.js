import { Calculator } from "../src";

describe("2개의 숫자에 대해 덧셈이 가능하다", () => {
  test("1 + 2 = 3", () => {
    const calculator = new Calculator();

    calculator.onClickNumber("1");
    calculator.onClickOperator("+");
    calculator.onClickNumber("2");
    calculator.onClickOperator("=");

    expect(calculator.displayNumber).toBe(3);
  });

  test("- 3 + 2 = -1", () => {
    const calculator = new Calculator();

    calculator.onClickOperator("-");
    calculator.onClickNumber("3");
    calculator.onClickOperator("+");
    calculator.onClickNumber("2");
    calculator.onClickOperator("=");

    expect(calculator.displayNumber).toBe(-1);
  });
});

describe("2개의 숫자에 대해 뺄셈이 가능하다", () => {
  test("3 - 1 = 2", () => {
    const calculator = new Calculator();

    calculator.onClickNumber("3");
    calculator.onClickOperator("-");
    calculator.onClickNumber("1");
    calculator.onClickOperator("=");

    expect(calculator.displayNumber).toBe(2);
  });

  test("- 3 - 2 = -5", () => {
    const calculator = new Calculator();

    calculator.onClickOperator("-");
    calculator.onClickNumber("3");
    calculator.onClickOperator("-");
    calculator.onClickNumber("2");
    calculator.onClickOperator("=");

    expect(calculator.displayNumber).toBe(-5);
  });
});

describe("2개의 숫자에 대해 곱셈이 가능하다", () => {
  test("1 x 2 = 2", () => {
    const calculator = new Calculator();

    calculator.onClickNumber("1");
    calculator.onClickOperator("x");
    calculator.onClickNumber("2");
    calculator.onClickOperator("=");

    expect(calculator.displayNumber).toBe(2);
  });

  test("- 3 x 2 = -6", () => {
    const calculator = new Calculator();

    calculator.onClickOperator("-");
    calculator.onClickNumber("3");
    calculator.onClickOperator("x");
    calculator.onClickNumber("2");
    calculator.onClickOperator("=");

    expect(calculator.displayNumber).toBe(-6);
  });

  test("4 x 0 = 0", () => {
    const calculator = new Calculator();

    calculator.onClickOperator("4");
    calculator.onClickOperator("x");
    calculator.onClickNumber("0");
    calculator.onClickOperator("=");

    expect(calculator.displayNumber).toBe(0);
  });
});

describe("2개의 숫자에 대해 나눗셈이 가능하다", () => {
  test("4 ÷ 2 = 2", () => {
    const calculator = new Calculator();

    calculator.onClickNumber("4");
    calculator.onClickOperator("÷");
    calculator.onClickNumber("2");
    calculator.onClickOperator("=");

    expect(calculator.displayNumber).toBe(2);
  });

  test("0으로 나누면 숫자아님이 표시된다.", () => {
    const calculator = new Calculator();

    calculator.onClickNumber("3");
    calculator.onClickOperator("÷");
    calculator.onClickNumber("0");
    calculator.onClickOperator("=");

    expect(calculator.displayNumber).toBe("숫자아님");
  });
});

describe("숫자는 한번에 최대 3자리 수까지만 다룰 수 있다.", () => {
  test("12345 입력시 123이 표시된다", () => {
    const calculator = new Calculator();

    calculator.onClickNumber("1");
    calculator.onClickNumber("2");
    calculator.onClickNumber("3");
    calculator.onClickNumber("4");
    calculator.onClickNumber("5");

    expect(calculator.displayNumber).toBe(123);
  });
});

describe("계산 결과를 표현할 때 소수점 이하는 버림한다", () => {
  test("10 ÷ 3 = 3", () => {
    const calculator = new Calculator();

    calculator.onClickNumber("10");
    calculator.onClickOperator("÷");
    calculator.onClickNumber("3");
    calculator.onClickOperator("=");

    expect(calculator.displayNumber).toBe(3);
  });
});
