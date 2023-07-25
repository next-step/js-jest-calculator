import Calculator from '../src/Calculator.js';
import CustomError from '../src/Error.js';

const calculator = new Calculator();

describe('Calculator', () => {
  // 2개의 숫자에 대해 덧셈이 가능하다.
  it('Adds 1 + 2 to equal 3', () => {
    expect(calculator.sum(1, 2)).toBe(3);
  });

  // 2개의 양수에 대해 덧셈이 가능하다.
  it('Adds (+3) + (+5) to equal 8', () => {
    expect(calculator.sum(+3, +5)).toBe(8);
  });

  // 2개의 음수에 대해 덧셈이 가능하다.
  it('Adds (-4) + (-6) to equal -10', () => {
    expect(calculator.sum(-4, -6)).toBe(-10);
  });

  // 1개의 양수와 1개의 음수에 대해 덧셈이 가능하다.
  it('Adds (+3) + (-10) to equal -7', () => {
    expect(calculator.sum(+3, -10)).toBe(-7);
  });

  // 1개의 음수와 1개의 양수에 대해 덧셈이 가능하다.
  it('Adds (-10) + (+20) to equal 10', () => {
    expect(calculator.sum(-10, +20)).toBe(10);
  });

  // 2개의 소수에 대해 소숫점 연산이 가능하다.

  // 2개의 숫자에 대해 뺄셈이 가능하다.
  it('Subtracts 1 - 2 to equal -1', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
  });

  // 2개의 숫자에 대해 곱셈이 가능하다.
  it('Multiply 1 * 2 to equal 2', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });

  // 2개의 숫자에 대해 나눗셈이 가능하다.
  it('Divides 4 / 2 to equal 2', () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });
  it('Divides 4 / 0 to Error', () => {
    expect(() => calculator.divide(4, 0)).toThrow(CustomError.DIVISION);
  });

  // 숫자는 한번에 최대 3자리 수까지만 다룰 수 있다.
  it('3 digits 1000 + 4 to Error', () => {
    expect(() => calculator.sum(1000, 4)).toThrow(CustomError.DIGITS);
  });

  // 계산 결과를 표현할 때 소수점 이하는 버림한다.
  it('Floor 1 / 2 to equal 0', () => {
    expect(calculator.divide(1, 2)).toBe(0);
  });
  it('Floor 1 - 1.5 to equal -1', () => {
    expect(calculator.subtract(1, 1.5)).toBe(-1);
  });
});
