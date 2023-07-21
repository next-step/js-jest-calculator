import Calculator from "../src/classes/CalculatorClass";

describe("계산기 사칙 연산 기능 테스트입니다.", () => {
  const calculator = new Calculator();

  test("2개의 숫자에 대해 덧셈이 가능합니다.", () => {
    expect(calculator.addNumber(30, 5)).toBe(35);
  });

  test("2개의 숫자에 대해 뺄셈이 가능합니다.", () => {
    expect(calculator.substractNumber(2, 5)).toBe(-3);
  });

  test("2개의 숫자에 대해 곱셈이 가능합니다.", () => {
    expect(calculator.multiplyNumber(3, 5)).toBe(15);
  });

  test("2개의 숫자에 대해 나눗셈이 가능합니다.", () => {
    expect(calculator.divideNumber(12, 2)).toBe(6);
  });
});

describe("계산기 사칙 연산 기능의 예외 사항에 대한 테스트입니다.", () => {
  const calculator = new Calculator();

  test("입력 숫자 길이에 대한 에러를 반환합니다.", () => {
    expect(() => calculator.validateNumberLength(3333, 66)).toThrowError();
  });

  test("0으로 나누기 연산 시 에러를 반환합니다.", () => {
    expect(() => calculator.divideNumber(5, 0)).toThrowError();
  });
});
