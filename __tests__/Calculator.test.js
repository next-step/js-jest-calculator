import Calculator from "../src/classes/CalculatorClass";

describe("계산기 사칙 연산 기능 테스트입니다.", () => {
  const calculator = new Calculator();

  test.each([
    ["add", 30, 6, 36],
    ["add", -2, 6, 4],
    ["add", -2, -8, -10],
    ["add", 4, -6, -2],
    ["add", 32, 733, 765],
    ["add", 2.2, 2.4, 4],
  ])(
    "2개의 숫자에 대해 덧셈이 가능합니다.",
    (operator, number1, number2, expected) => {
      expect(calculator.calculate(operator, number1, number2)).toBe(expected);
    }
  );

  test.each([
    ["substract", 30, 6, 24],
    ["substract", -2, 6, -8],
    ["substract", -2, -8, 6],
    ["substract", 4, -6, 10],
    ["substract", 0.6, 0.5, 0],
    ["substract", 11, 0.5, 10],
  ])(
    "2개의 숫자에 대해 뺄셈이 가능합니다.",
    (operator, number1, number2, expected) => {
      expect(calculator.calculate(operator, number1, number2)).toBe(expected);
    }
  );

  test.each([
    ["multiply", 1, 6, 6],
    ["multiply", -2, 6, -12],
    ["multiply", 0.2, 8, 1],
    ["multiply", 4, -6, -24],
    ["multiply", -66, -22, 1452],
  ])(
    "2개의 숫자에 대해 곱셈이 가능합니다.",
    (operator, number1, number2, expected) => {
      expect(calculator.calculate(operator, number1, number2)).toBe(expected);
    }
  );

  test.each([
    ["divide", 30, 6, 5],
    ["divide", -2, -8, 0],
    ["divide", 6, -2, -3],
    ["divide", 0.6, 0.5, 1],
    ["divide", 11, 0.5, 22],
  ])(
    "2개의 숫자에 대해 나눗셈이 가능합니다.",
    (operator, number1, number2, expected) => {
      expect(calculator.calculate(operator, number1, number2)).toBe(expected);
    }
  );
});

// describe("계산기 사칙 연산 기능의 예외 사항에 대한 테스트입니다.", () => {
//   const calculator = new Calculator();

//   test("입력 숫자 길이에 대한 에러를 반환합니다.", () => {
//     expect(() => calculator.validateNumberLength(3333, 66)).toThrowError();
//   });

//   test("0으로 나누기 연산 시 에러를 반환합니다.", () => {
//     expect(() => calculator.divideNumber(5, 0)).toThrowError();
//   });
// });
