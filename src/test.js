import { add, subtract, multiply, divide } from "./index.js";

test("2 + 5은 5입니다.", () => {
  expect(add(2, 3)).toBe(5);
});

test("5 - 2은 3입니다.", () => {
  expect(subtract(5, 2)).toBe(3);
});

test("4 * 3은 12입니다.", () => {
  expect(multiply(4, 3)).toBe(12);
});

test("10/2 는 5 입니다.", () => {
  expect(divide(10, 2)).toBe(5);
});

test("0으로 나눌 경우 에러가 발생", () => {
  expect(() => divide(10, 0)).toThrow("0으로 나눌 수 없습니다");
});
