import calculator from '../src/Calculator.js';

describe('Calculator', () => {
  // 2개의 숫자에 대해 덧셈이 가능하다.
  it('Adds 1 + 2 to equal 3', () => {
    expect(calculator.sum(1, 2)).toBe(3);
  });

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

  // 숫자는 한번에 최대 3자리 수까지만 다룰 수 있다.
  it('3 digits 1000 + 4 to equal 1004', () => {
    try {
      expect(calculator.sum(1000, 4)).toBe(false);
    } catch (e) {
      expect(e.message).toBe(
        '숫자는 한번에 최대 3자리 수까지만 다룰 수 있습니다!'
      );
    }
  });

  // 계산 결과를 표현할 때 소수점 이하는 버림한다.
  it('Floor 1 / 2 to equal 0', () => {
    expect(calculator.divide(1, 2)).toBe(0);
  });
});
