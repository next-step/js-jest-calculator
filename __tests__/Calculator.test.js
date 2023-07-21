import Calculator from '../src/calculator';
import { BasicOperation } from '../src/operations';

describe('계산기', () => {
  it('2개의 숫자에 대해 덧셈이 가능하다', () => {
    const calculator = new Calculator(new BasicOperation());

    expect(calculator.operation.sum(1, 2)).toBe(1 + 2);
    expect(calculator.operation.sum(-1, -1)).toBe(-1 + -1);
  });

  it('2개의 숫자에 대해 뺄셈이 가능하다', () => {
    const calculator = new Calculator(new BasicOperation());

    expect(calculator.operation.subtract(1, 2)).toBe(1 - 2);
    expect(calculator.operation.subtract(-1, -2)).toBe(-1 - -2);
  });

  it('2개의 숫자에 대해 곱셈이 가능하다', () => {
    const calculator = new Calculator(new BasicOperation());

    expect(calculator.operation.multiply(1, 2)).toBe(1 * 2);
    expect(calculator.operation.multiply(-3, 2)).toBe(-3 * 2);
  });

  it('2개의 숫자에 대해 나누기가 가능하다', () => {
    const calculator = new Calculator(new BasicOperation());

    expect(calculator.operation.divide(4, 2)).toBe(4 / 2);
    expect(calculator.operation.divide(0, 2)).toBe(0 / 2);
    expect(calculator.operation.divide(1, 0)).toBe(1 / 0);
  });

  it('숫자는 한번에 최대 3자리 수까지만 다룰 수 있다.', () => {
    const calculator = new Calculator(new BasicOperation());

    expect(() => calculator.operation.sum(1000, 2000)).toThrow(
      '숫자는 한 번에 3자리까지 입력 가능합니다.'
    );
  });

  it('계산 결과를 표현할 때 소수점 이하는 버림한다', () => {
    const calculator = new Calculator(new BasicOperation());

    expect(calculator.operation.divide(1, 2)).toBe(0);
  });
});
