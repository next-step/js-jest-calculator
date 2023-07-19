import Calculator from "../../src/models/Calculator";

describe("Calculator", () => {
  const calculator = new Calculator();

  it("두 숫자를 입력받아 더할 수 있어야한다.", () => {
    expect(calculator.doCalculate(1, 2, calculator.add)).toBe(3);
  });

  it("두 숫자를 입력받아 뺄 수 있어야 한다.", () => {
    expect(calculator.doCalculate(1, 2, calculator.subtract)).toBe(-1);
  });

  it("두 숫자를 입력받아 곱할 수 있어야 한다.", () => {
    expect(calculator.doCalculate(1, 2, calculator.multiply)).toBe(2);
  });

  it("두 숫자를 입력받아 나눌 수 있어야 한다.", () => {
    expect(calculator.doCalculate(1, 2, calculator.divide)).toBe(0);
  });

  it("숫자 자릿수가 세자리 초과시 에러를 표시한다.", () => {
    expect(() => calculator.doCalculate(1000, 2, calculator.add)).toThrow(
      "숫자 입력은 최대 세자리까지 가능합니다."
    );
    expect(() =>
      calculator.doCalculate(0.3333, 2, calculator.subtract)
    ).toThrow("숫자 입력은 최대 세자리까지 가능합니다.");
    expect(() => calculator.doCalculate(1000, 2, calculator.multiply)).toThrow(
      "숫자 입력은 최대 세자리까지 가능합니다."
    );
    expect(() => calculator.doCalculate(1000, 2, calculator.divide)).toThrow(
      "숫자 입력은 최대 세자리까지 가능합니다."
    );
  });

  it("계산 결과를 표현할 때 소수점 이하는 버림한다.", () => {
    expect(calculator.doCalculate(0.4, 1, calculator.add)).toBe(1);
    expect(calculator.doCalculate(0.4, 1, calculator.subtract)).toBe(-0);
    expect(calculator.doCalculate(0.4, 1, calculator.multiply)).toBe(0);
    expect(calculator.doCalculate(1, 2, calculator.divide)).toBe(0);
  });
});
