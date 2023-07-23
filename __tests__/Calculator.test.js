import Calculator from "../src";

describe("계산기", () => {
  const calcluator = new Calculator();
  describe("덧셈", () => {
    test("2개의 숫자에 대해 덧셈이 가능하다.", () => {
      expect(calcluator.add(1, 2)).toBe(3);
    });
  });
  describe("뺄셈", () => {
    test("2개의 숫자에 대해 뺄셈이 가능하다.", () => {
      expect(calcluator.subtract(1, 2)).toBe(-1);
    });
  });
  describe("곱셈", () => {
    test("2개의 숫자에 대해 곱셈이 가능하다.", () => {
      expect(calcluator.multiply(1, 2)).toBe(2);
    });
  });
  describe("나눗셈", () => {
    test("2개의 숫자에 대해 나눗셈이 가능하다.", () => {
      expect(calcluator.divide(2, 1)).toBe(2);
    });
  });
  describe("특수한 조건", () => {
    test("숫자는 한번에 최대 3자리 수까지만 다룰 수 있다.", () => {
      expect(calcluator.add(100, 1000)).toBe(100);
    });
    test("계산 결과를 표현할 때 소수점 이하는 버림한다.", () => {
      expect(calcluator.add(0.1, 0.2)).toBe(0);
    });
  });
});
