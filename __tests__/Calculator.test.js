import Calculator from '../src/calculator';
import { BasicOperation } from '../src/operations';

describe('계산기', () => {
  describe('2개의 숫자 사칙연산', () => {
    const calculator = new Calculator(new BasicOperation());

    test.each([
      [1, 2, 3],
      [10, 20, 30],
      [-999, 999, 0],
    ])('sum(%d, %d)', (a, b, expected) => {
      const result = calculator.operation.sum(a, b);
      expect(result).toBe(expected);
    });

    test.each([
      [1, 2, -1],
      [0, 1, -1],
      [10, 20, -10],
      [-999, 999, -1998],
    ])('subtract(%f, %f)', (a, b, expected) => {
      const result = calculator.operation.subtract(a, b);
      expect(result).toBe(expected);
    });

    test.each([
      [1, 2, 2],
      [0, 1, 0],
      [10, 20, 200],
      [-999, 999, -998001],
    ])('multiply(%f, %f)', (a, b, expected) => {
      const result = calculator.operation.multiply(a, b);
      expect(result).toBe(expected);
    });

    test.each([
      [4, 2, 2],
      [0, 1, 0],
      [7, -2, -3],
      [-999, 999, -1],
      [-1, -10, 0],
    ])('divide(%f, %f)', (a, b, expected) => {
      const result = calculator.operation.divide(a, b);
      expect(result).toBe(expected);
    });
  });

  describe('예외 사항', () => {
    it('3자리 수 이상 연산', () => {
      const calculator = new Calculator(new BasicOperation());

      expect(() => calculator.operation.sum(1000, 2000)).toThrow(
        '숫자는 한 번에 3자리까지 입력 가능합니다.'
      );
      expect(() => calculator.operation.subtract(1000, 2000)).toThrow(
        '숫자는 한 번에 3자리까지 입력 가능합니다.'
      );
      expect(() => calculator.operation.multiply(1000, 2000)).toThrow(
        '숫자는 한 번에 3자리까지 입력 가능합니다.'
      );
      expect(() => calculator.operation.divide(1000, 2000)).toThrow(
        '숫자는 한 번에 3자리까지 입력 가능합니다.'
      );
    });

    describe('계산 결과를 표현할 때 소수점 이하는 버림한다', () => {
      const calculator = new Calculator(new BasicOperation());

      test.each([[1.1, 6.2, 7]])('sum(%d, %d)', (a, b, expected) => {
        const result = calculator.operation.sum(a, b);
        expect(result).toBe(expected);
      });

      test.each([
        [-1.1, 1.22, -2],
        [1.99, 2.4, 0],
      ])('subtract(%f, %f)', (a, b, expected) => {
        const result = calculator.operation.subtract(a, b);
        expect(result).toBe(expected);
      });

      test.each([
        [1, 2.2, 2],
        [-1.1, -1.22, 1],
      ])('multiply(%f, %f)', (a, b, expected) => {
        const result = calculator.operation.multiply(a, b);
        expect(result).toBe(expected);
      });

      test.each([
        [7, -2, -3],
        [-1.1, -1.22, 0],
      ])('divide(%f, %f)', (a, b, expected) => {
        const result = calculator.operation.divide(a, b);
        expect(result).toBe(expected);
      });
    });
  });
});
