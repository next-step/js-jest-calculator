import { Calculator } from "../src";

const calculator = new Calculator();

describe("2개의 숫자에 대해 덧셈이 가능하다.", () => {
  test("3.2와 2의 합은 5이다.", () => {
    expect(calculator.sum(3.2, 2)).toBe(5);
  });
  test("-1과 1의 합은 0이다.", () => {
    expect(calculator.sum(-1, 1)).toBe(0);
  });
  test("1과 1의 합은 2이다.", () => {
    expect(calculator.sum(1, 1)).toBe(2);
  });
});

describe("2개의 숫자에 대해 뺄셈이 가능하다.", () => {
  test("3.2와 2의 차는 1이다.", () => {
    expect(calculator.subtract(3.2, 2)).toBe(1);
  });
  test("-1과 1의 차는 -2이다.", () => {
    expect(calculator.subtract(-1, 1)).toBe(-2);
  });
  test("1과 1의 차는 0이다.", () => {
    expect(calculator.subtract(1, 1)).toBe(0);
  });
});

describe("2개의 숫자에 대해 곱셈이 가능하다.", () => {
  test("3.2와 2의 곱은 6이다.", () => {
    expect(calculator.multiply(3.2, 2)).toBe(6);
  });
  test("-1과 1의 곱은 -1이다.", () => {
    expect(calculator.multiply(-1, 1)).toBe(-1);
  });
  test("1과 1의 곱은 1이다.", () => {
    expect(calculator.multiply(1, 1)).toBe(1);
  });
});

describe("2개의 숫자에 대해 나눗셈이 가능하다.", () => {
  test("3.2와 2의 나눗셈은 1이다.", () => {
    expect(calculator.divide(3.2, 2)).toBe(1);
  });
  test("-1과 1의 나눗셈은 -1이다.", () => {
    expect(calculator.divide(-1, 1)).toBe(-1);
  });
  test("1과 1의 나눗셈은 1이다.", () => {
    expect(calculator.divide(1, 1)).toBe(1);
  });
});
