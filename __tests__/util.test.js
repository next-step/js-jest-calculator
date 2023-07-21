import { hasNumberOverLength } from '../src/utils/number';

describe('유틸 함수', () => {
  describe('hasNumberOverLength', () => {
    describe('숫자 배열에서 주어진 length보다 긴 숫자가 있다면 true 반환', () => {
      test.each([
        [[1000, 100], 3, true],
        [[-100000, 100], 5, true],
        [[999, 100], 3, false],
      ])('hasNumberOverLength(%f,%f)', (numbers, numberLength, expected) => {
        const result = hasNumberOverLength(numbers, numberLength);

        expect(result).toBe(expected);
      });
    });

    describe('소수점 이하의 길이는 길이 계산에서 배제한다.₩', () => {
      test.each([
        [[3.333], 3, false],
        [[-1.11], 1, false],
        [[-1.11], 0, true],
      ])('hasNumberOverLength(%f,%f)', (numbers, numberLength, expected) => {
        const result = hasNumberOverLength(numbers, numberLength);

        expect(result).toBe(expected);
      });
    });
  });
});
