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
});
