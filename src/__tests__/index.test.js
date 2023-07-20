import {Calculator} from '..';

describe('계산기 미션', () => {
  const calculator = new Calculator();

  test('2개의 숫자에 대해 덧셈이 가능하다.', () => {
    expect(calculator.sum(1, 2)).toBe(3);
  });

  test('2개의 숫자에 대해 뺄셈이 가능하다.', () => {
    expect(calculator.subtract(3, 1)).toBe(2);
  });

  test('2개의 숫자에 대해 곱셈이 가능하다.', () => {
    expect(calculator.multiply(2, 4)).toBe(8);
  });

  test('2개의 숫자에 대해 나눗셈이 가능하다.', () => {
    expect(calculator.divide(8, 4)).toBe(2);
  });

  test('0으로는 나눌 수 없다.', () => {
    expect(() => calculator.divide(5, 0)).toThrowError('0으로 나눌 수 없습니다.');
  });
});
