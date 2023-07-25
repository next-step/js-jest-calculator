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
});
