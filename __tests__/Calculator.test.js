import { add, subtraction, division, multiplication } from "../src/index";

test('더하기 1 + 2 값 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('더하기 숫자3자리 에러 테스트', () => {
  expect(() => add(1000, 2)).toThrow("숫자는 한번에 최대 3자리 수까지만 다룰 수 있습니다.");
});

test('뺴기 10 - 4 값 6', () => {
  expect(subtraction(10, 4)).toBe(6);
});

test('빼기 숫자3자리 에러 테스트', () => {
  expect(() => subtraction(1000, 2)).toThrow("숫자는 한번에 최대 3자리 수까지만 다룰 수 있습니다.");
});

test('나누기 10 / 2 값 5', () => {
  expect(division(10, 2)).toBe(5);
});

test('나누기 숫자3자리 에러 테스트', () => {
  expect(() => subtraction(1000, 2)).toThrow("숫자는 한번에 최대 3자리 수까지만 다룰 수 있습니다.");
});

test('곱하기 2 * 4 값 8', () => {
  expect(multiplication(2, 4)).toBe(8);
});

test('곱하기 숫자3자리 에러 테스트', () => {
  expect(() => subtraction(1000, 2)).toThrow("숫자는 한번에 최대 3자리 수까지만 다룰 수 있습니다.");
});



