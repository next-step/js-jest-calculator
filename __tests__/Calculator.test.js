import { calculator, ERROR_MESSAGE } from '../src';

describe('계산기 기능', () => {
  test.each([
    [1, 2, 3],
    [-2, 4, 2],
    [0, 1, 1],
    [100, -99, 1]
  ])('add 메서드에 두 개의 숫자를 전달하면 덧셈한 값이 출력된다.', (first, second, expected) => {
    expect(calculator.add(first, second)).toBe(expected);
  });

  test.each([
    [1, 2, -1],
    [-2, 4, -6],
    [0, 1, -1],
    [100, -99, 199]
  ])('subtract 메서드에 두 개의 숫자를 전달하면 뺄셈한 값이 출력된다.', (first, second, expected) => {
    expect(calculator.subtract(first, second)).toBe(expected);
  });

  test.each([
    [1, 2, 2],
    [-2, 4, -8],
    [0, 1, 0],
    [100, -99, -9900]
  ])('multiply 메서드에 두 개의 숫자를 전달하면 곱셈한 값이 출력된다.', (first, second, expected) => {
    expect(calculator.multiply(first, second)).toBe(expected);
  });

  test.each([
    [2, 2, 1],
    [4, 2, 2],
    [9, 3, 3],
    [-900, 100, -9]
  ])('divide 메서드에 두 개의 숫자를 전달하면 나눗셈한 값이 출력된다.', (first, second, expected) => {
    expect(calculator.divide(first, second)).toBe(expected);
  });

  test.each([
    [7, 2, 3],
    [7, -2, -3],
    [9, 2, 4],
    [9, -2, -4]
  ])('계산 결과가 소수점인 경우, 소수점 이하는 버림한다.', (first, second, expected) => {
    expect(calculator.divide(first, second)).toBe(expected);
  });

  test.each([[7, 2, 3]])('계산 결과가 소수점인 경우, 소수점 이하는 버림한다.', (first, second, expected) => {
    expect(calculator.divide(first, second)).toBe(expected);
  });
});

describe('계산기 유효성 검사', () => {
  it('계산기는 반드시 두 개의 숫자를 받아야한다.', () => {
    expect(() => calculator.multiply()).toThrow(ERROR_MESSAGE.REQUIRED_NUMBER);
    expect(() => calculator.add(2)).toThrow(ERROR_MESSAGE.REQUIRED_NUMBER);
    expect(() => calculator.add(2, 3, 4)).toThrow(ERROR_MESSAGE.REQUIRED_NUMBER);
    expect(() => calculator.divide(2)).toThrow(ERROR_MESSAGE.REQUIRED_NUMBER);
    expect(() => calculator.subtract(1, 2, 3, 4, 5)).toThrow(ERROR_MESSAGE.REQUIRED_NUMBER);
  });

  it('계산기는 반드시 숫자만 허용한다.', () => {
    expect(() => calculator.add('1', 2)).toThrow(ERROR_MESSAGE.NOT_NUMBER);
    expect(() => calculator.divide('1', NaN)).toThrow(ERROR_MESSAGE.NOT_NUMBER);
    expect(() => calculator.subtract(false, 2)).toThrow(ERROR_MESSAGE.NOT_NUMBER);
    expect(() => calculator.multiply('1', {})).toThrow(ERROR_MESSAGE.NOT_NUMBER);

    expect(() => calculator.add(function () {}, null)).toThrow(ERROR_MESSAGE.NOT_NUMBER);
    expect(() => calculator.divide({}, 1)).toThrow(ERROR_MESSAGE.NOT_NUMBER);
    expect(() => calculator.subtract(1, undefined)).toThrow(ERROR_MESSAGE.NOT_NUMBER);
    expect(() => calculator.multiply('1', 0)).toThrow(ERROR_MESSAGE.NOT_NUMBER);

    expect(calculator.add(0, 2)).toBe(2);
    expect(calculator.multiply(0, 2)).toBe(0);
    expect(calculator.divide(0, 2)).toBe(0);
    expect(calculator.subtract(0, 2)).toBe(-2);
  });

  it('계산기는 세 자리 수의 숫자까지만 허용한다.', () => {
    expect(() => calculator.add(999, 1000)).toThrow(ERROR_MESSAGE.OVER_RANGE);
    expect(() => calculator.divide(-9999, 1)).toThrow(ERROR_MESSAGE.OVER_RANGE);
    expect(() => calculator.subtract(999, 12345)).toThrow(ERROR_MESSAGE.OVER_RANGE);
    expect(() => calculator.multiply(-54321, 1000)).toThrow(ERROR_MESSAGE.OVER_RANGE);

    expect(calculator.multiply(-999, -999)).toBe(998001);
    expect(calculator.add(-999, 999)).toBe(0);
    expect(calculator.divide(200, -100)).toBe(-2);
  });

  it('계산기는 0으로 나눌 수 없다.', () => {
    expect(() => calculator.divide(1, 0)).toThrow(ERROR_MESSAGE.NOT_DIVIDE_ZERO);
    expect(() => calculator.divide(0, 0)).toThrow(ERROR_MESSAGE.NOT_DIVIDE_ZERO);
  });
});
