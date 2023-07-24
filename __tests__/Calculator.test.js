import { Calculator } from "../src/Calculator";
import { ERROR_MESSAGES } from "../src/constants";

describe("Calculator", () => {
  describe("기본 기능 구현", () => {
    test("2개의 숫자에 대해 덧셈이 가능하다.", () => {
      const calculator = new Calculator();

      expect(calculator.add(1, 2)).toBe(3);
    });
    test("2개의 숫자에 대해 뺄셈이 가능하다.", () => {
      const calculator = new Calculator();

      expect(calculator.minus(1, 2)).toBe(-1);
    });
    test("2개의 숫자에 대해 곱셈이 가능하다.", () => {
      const calculator = new Calculator();

      expect(calculator.multiply(1, 2)).toBe(2);
    });
    test("2개의 숫자에 대해 나눗셈이 가능하다.", () => {
      const calculator = new Calculator();

      expect(calculator.divide(1, 2)).toBe(0.5);
    });

    test("계산 결과를 표현할 때 소수점 이하는 버림한다.", () => {
      const calculator = new Calculator();

      calculator.result = 3.44444;

      expect(calculator.showResult()).toBe(3);
    });
  });

  describe("예외처리", () => {
    test("숫자는 한번에 최대 3자리 수까지만 다룰 수 있다.", () => {
      const calculator = new Calculator();

      [1, 2, 3].forEach((aNumber) => calculator.pressNumber(aNumber));

      expect(() => calculator.pressNumber(1)).toThrowError(
        ERROR_MESSAGES.EXCEED_MAXIMUM_INPUT_NUMBERS
      );
    });

    test("연산하는 값이 숫자가 아니라면 에러를 던진다", () => {
      const calculator = new Calculator();

      expect(() => calculator.multiply(1, "2")).toThrowError(
        ERROR_MESSAGES.TYPE_IS_NOT_NUMBER
      );
    });

    test("나눗셈을 할 때 분모가 0이면 에러를 던진다", () => {
      const calculator = new Calculator();

      expect(() => calculator.divide(1, 0)).toThrowError(
        ERROR_MESSAGES.CAN_NOT_DIVIDE_ZERO_IN_DENOMINATOR
      );
    });
  });
  describe("시나리오 테스트", () => {
    test("숫자 버튼을 누르고, 연산자를 누르고, 숫자를 누르고, 결과값을 누르면, 연산결과가 출력된다.", () => {
      const calculator = new Calculator();

      const spyFn = jest.spyOn(calculator, "showResult");

      calculator.pressNumber(1);
      calculator.pressOperator("+");
      calculator.pressNumber(2);
      calculator.pressResult();

      expect(spyFn).toBeCalled();
      expect(calculator.result).toBe(3);
    });
  });
});
