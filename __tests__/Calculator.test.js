import Calulator from '../src/Calulator';
import MESSAGE from '../src/constants/Message';

describe('계산기 기능 요구사항 테스트', () => {
  test('2개의 숫자에 대해 덧셈이 가능하다.', () => {
    const result = Calulator.add(1, 2);
    expect(result).toBe(3);
  });
  test('2개의 숫자에 대해 뺄셈이 가능하다.', () => {
    const result = Calulator.subtract(2, 1);
    expect(result).toBe(1);
  });
  test('2개의 숫자에 대해 곱셈이 가능하다.', () => {
    const result = Calulator.multiply(3, 1);
    expect(result).toBe(3);
  });
  test('2개의 숫자에 대해 곱셈이 가능하다.', () => {
    const result = Calulator.divide(5, 1);
    expect(result).toBe(5);
  });
});

describe('계산기 예외 처리 테스트', () => {
  test('숫자는 한번에 최대 4자리 수 이상이 되면 예외처리가 되어야 한다.', () => {
    const result = [
      Calulator.add(1000, 2),
      Calulator.subtract(1000, 2),
      Calulator.multiply(1000, 2),
      Calulator.divide(1000, 2),
    ];
    const digitErrorArr = Array(result.length).fill(MESSAGE.DIGIT_ERROR);
    expect(result).toStrictEqual(digitErrorArr);
  });
});
