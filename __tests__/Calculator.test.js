import Calculator from "../src";

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("2개의 숫자에 대해 덧셈이 가능하다", () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add("100", "200")).toBe(300);
    expect(calculator.add("abc", 2)).toEqual(Calculator.ERRORS.NOT_A_NUMBER);
    expect(calculator.add(1000, 2)).toEqual(Calculator.ERRORS.INVALID_INPUT);
  });

  test("2개의 숫자에 대해 뺄셈이 가능하다", () => {
    expect(calculator.subtract(2, 1)).toBe(1);
    expect(calculator.subtract("200", "100")).toBe(100);
    expect(calculator.subtract("abc", 2)).toEqual(
      Calculator.ERRORS.NOT_A_NUMBER
    );
    expect(calculator.subtract(1000, 2)).toEqual(
      Calculator.ERRORS.INVALID_INPUT
    );
  });

  test("2개의 숫자에 대해 곱셈이 가능하다", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply("100", "200")).toBe(20000);
    expect(calculator.multiply("abc", 2)).toEqual(
      Calculator.ERRORS.NOT_A_NUMBER
    );
    expect(calculator.multiply(1000, 2)).toEqual(
      Calculator.ERRORS.INVALID_INPUT
    );
  });

  test("2개의 숫자에 대해 곱셈이 가능하다", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply("100", "200")).toBe(20000);
    expect(calculator.multiply("abc", 2)).toEqual(
      Calculator.ERRORS.NOT_A_NUMBER
    );
    expect(calculator.multiply(1000, 2)).toEqual(
      Calculator.ERRORS.INVALID_INPUT
    );
  });

  test("2개의 숫자에 대해 나눗셈이 가능하다", () => {
    expect(calculator.divide(6, 3)).toBe(2);
    expect(calculator.divide("200", "100")).toBe(2);
    expect(calculator.divide("abc", 2)).toEqual(Calculator.ERRORS.NOT_A_NUMBER);
    expect(calculator.divide(1000, 2)).toEqual(Calculator.ERRORS.INVALID_INPUT);
    expect(calculator.divide(6, 0)).toEqual(Calculator.ERRORS.DIVIDE_BY_ZERO);
    expect(calculator.divide(6, "0")).toEqual(Calculator.ERRORS.DIVIDE_BY_ZERO);
  });

  test("숫자는 한번에 최대 3자리 수까지만 다룰 수 있다", () => {
    expect(calculator.add(1000, 2)).toEqual(Calculator.ERRORS.INVALID_INPUT);
    expect(calculator.subtract(1000, 2)).toEqual(
      Calculator.ERRORS.INVALID_INPUT
    );
    expect(calculator.multiply(1000, 2)).toEqual(
      Calculator.ERRORS.INVALID_INPUT
    );
    expect(calculator.divide(1000, 2)).toEqual(Calculator.ERRORS.INVALID_INPUT);
  });
});
