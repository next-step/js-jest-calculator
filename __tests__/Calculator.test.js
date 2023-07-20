import { calculator, ERROR_MESSAGE } from '../src';

describe('계산기 기능', () => {
  it('add 메서드에 두 개의 숫자를 전달하면 덧셈한 값이 출력된다.', () => {
    const calculatedValue = calculator.add(1, 2);
    expect(calculatedValue).toBe(3);
  });

  it('subtract 메서드에 두 개의 숫자를 전달하면 뺄셈한 값이 출력된다.', () => {
    const calculatedValue = calculator.subtract(1, 2);
    expect(calculatedValue).toBe(-1);
  });

  it('multiply 메서드에 두 개의 숫자를 전달하면 곱셈한 값이 출력된다.', () => {
    const calculatedValue = calculator.multiply(1, 2);
    expect(calculatedValue).toBe(2);
  });

  it('divide 메서드에 두 개의 숫자를 전달하면 나눗셈한 값이 출력된다.', () => {
    const calculatedValue = calculator.divide(8, 2);
    expect(calculatedValue).toBe(4);
  });

  it('계산 결과가 소수점인 경우, 소수점 이하는 버림한다.', () => {
    const calculatedValue = calculator.divide(7, 2);
    expect(calculatedValue).toBe(3);
  });

  it('계산기는 반드시 두 개의 숫자를 받아야한다.', () => {
    expect(() => calculator.add(2)).toThrow(ERROR_MESSAGE.REQUIRED_NUMBER);
    expect(() => calculator.divide(2)).toThrow(ERROR_MESSAGE.REQUIRED_NUMBER);
    expect(() => calculator.subtract(2)).toThrow(ERROR_MESSAGE.REQUIRED_NUMBER);
    expect(() => calculator.multiply(2)).toThrow(ERROR_MESSAGE.REQUIRED_NUMBER);
  });

  it('계산기는 반드시 숫자만 허용한다.', () => {
    expect(() => calculator.add('1', 2)).toThrow(ERROR_MESSAGE.NOT_NUMBER);
    expect(() => calculator.divide('1', 2)).toThrow(ERROR_MESSAGE.NOT_NUMBER);
    expect(() => calculator.subtract('1', 2)).toThrow(ERROR_MESSAGE.NOT_NUMBER);
    expect(() => calculator.multiply('1', 2)).toThrow(ERROR_MESSAGE.NOT_NUMBER);
  });

  it('계산기는 세 자리 수의 숫자까지만 허용한다.', () => {
    expect(() => calculator.add(999, 1000)).toThrow(ERROR_MESSAGE.OVER_MAX_LENGTH);
    expect(() => calculator.divide(999, 1000)).toThrow(ERROR_MESSAGE.OVER_MAX_LENGTH);
    expect(() => calculator.subtract(999, 1000)).toThrow(ERROR_MESSAGE.OVER_MAX_LENGTH);
    expect(() => calculator.multiply(999, 1000)).toThrow(ERROR_MESSAGE.OVER_MAX_LENGTH);
  });
});
