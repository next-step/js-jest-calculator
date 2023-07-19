import { Calculator } from "../src/Calculator";

describe("Calculator", () => {
  test("2개의 숫자에 대해 덧셈이 가능하다.", () => {
    const calculator = new Calculator();

    calculator.add(1, 2);

    expect(calculator.result).toBe(3);
  });
  test("2개의 숫자에 대해 뺄셈이 가능하다.", () => {
    const calculator = new Calculator();

    calculator.minus(1, 2);

    expect(calculator.result).toBe(-1);
  });
  test("2개의 숫자에 대해 곱셈이 가능하다.", () => {
    const calculator = new Calculator();

    calculator.multiply(1, 2);

    expect(calculator.result).toBe(2);
  });
  test("2개의 숫자에 대해 나눗셈이 가능하다.", () => {
    const calculator = new Calculator();

    calculator.divide(3, 2);

    expect(calculator.result).toBe(1);
  });
  test("숫자는 한번에 최대 3자리 수까지만 다룰 수 있다.", () => {
    const calculator = new Calculator();

    calculator.insertNumber(1);
    calculator.insertNumber(1);
    calculator.insertNumber(1);

    expect(() => calculator.insertNumber(1)).toThrow(
      "숫자는 한번에 최대 3자리 수까지만 다룰 수 있습니다"
    );
  });
  test("계산 결과를 표현할 때 소수점 이하는 버림한다.", () => {
    const calculator = new Calculator();

    calculator.result = 3.44444;

    expect(calculator.result).toBe(3);
  });
});
