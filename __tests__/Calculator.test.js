import Calulator from '../src/Calulator';
import MESSAGE from '../src/constants/Message';

const calculator = new Calulator();

describe('계산기 기능 요구사항 테스트', () => {
  test('2개의 숫자에 대해 덧셈이 가능하다.', () => {
    const result = calculator.add(1, 2);
    expect(result).toBe(3);
  });
  test('2개의 숫자에 대해 뺄셈이 가능하다.', () => {
    const result = calculator.subtract(2, 1);
    expect(result).toBe(1);
  });
  test('2개의 숫자에 대해 곱셈이 가능하다.', () => {
    const result = calculator.multiply(3, 1);
    expect(result).toBe(3);
  });
  test('2개의 숫자에 대해 곱셈이 가능하다.', () => {
    const result = calculator.divide(5, 1);
    expect(result).toBe(5);
  });
  test('계산 결과를 표현할 때 소수점 이하는 버림할 수 있어야 한다.', () => {
    const result = calculator.divide(1, 5);
    expect(result).toBe(0);
  });
});

describe('계산기 예외 처리 테스트', () => {
  test('숫자는 한번에 최대 4자리 수 이상이 되면 예외처리가 되어야 한다.', () => {
    const result = [
      calculator.add(1000, 2),
      calculator.subtract(1000, 2),
      calculator.multiply(1000, 2),
      calculator.divide(1000, 2),
    ];
    const digitErrorArr = Array(result.length).fill(MESSAGE.DIGIT_ERROR);
    expect(result).toStrictEqual(digitErrorArr);
  });
  test('만약 2개의 숫자를 계산하지 않는 경우 예외 처리가 되어야 한다.', () => {
    const result = [
      calculator.add(1, 2, 3),
      calculator.subtract(3),
      calculator.multiply(5, 2, 1, 7, 3),
      calculator.divide(6, 2, 3, 4),
    ];
    const argErrorArr = Array(result.length).fill(MESSAGE.ARG_ERROR);
    expect(result).toStrictEqual(argErrorArr);
  });
});
