import Calculator from '../src/calculator';

describe('계산기', () => {
  it('2개의 숫자에 대해 덧셈이 가능하다', () => {
    const calculator = new Calculator();
    const result = calculator.sum(1, 2);

    expect(result).toBe(3);
  });

  it('2개의 숫자에 대해 뺄셈이 가능하다', () => {
    const calculator = new Calculator();
    const result = calculator.subtract(1, 2);

    expect(result).toBe(-1);
  });

  it('2개의 숫자에 대해 곱셈이 가능하다', () => {
    const calculator = new Calculator();
    const result = calculator.multiply(1, 2);

    expect(result).toBe(2);
  });

  it('2개의 숫자에 대해 나누기가 가능하다', () => {
    const calculator = new Calculator();
    const result = calculator.divide(4, 2);

    expect(result).toBe(2);
  });

  it('숫자는 한번에 최대 3자리 수까지만 다룰 수 있다.', () => {
    const calculator = new Calculator();

    expect(() => calculator.sum(1000, 2000)).toThrow(
      '숫자는 한 번에 3자리까지 입력 가능합니다.'
    );
  });
});
