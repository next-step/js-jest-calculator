import {Calculator} from '..';

describe('계산기 미션', () => {
  const calculator = new Calculator();

  test('2개의 숫자에 대해 덧셈이 가능하다.', () => {
    expect(calculator.sum(1, 2)).toBe(3);
  });
});
