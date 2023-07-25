import { sum } from "../src/Calculator.js";

describe("덧셈 테스트", () => {
  test("한 자리 숫자 덧셈 테스트", () => {
    expect(sum([0, 0])).toBe(0);
    expect(sum([1, 1])).toBe(2);
    expect(sum([1, 3])).toBe(4);
    expect(sum([0, 3])).toBe(3);
    expect(sum([3, 0])).toBe(3);
    expect(sum([9, 9])).toBe(18);
  });

  test("두 자리 숫자 덧셈 테스트", () => {
    expect(sum([10, 10])).toBe(20);
    expect(sum([99, 11])).toBe(110);
    expect(sum([99, 99])).toBe(198);
  });

  test("세 자리 숫자 덧셈 테스트", () => {
    expect(sum([100, 100])).toBe(200);
    expect(() => sum([999, 999])).toThrowError();
  });

  test("실수 숫자 덧셈 테스트", () => {
    expect(sum([12.5, 10.1])).toBe(22);
  });

  test("문자를 입력한 경우 에러가 발생한다", () => {
    expect(() => sum(["100", "000"])).toThrowError();
    expect(() => sum(["010", "1"])).toThrowError();
    expect(() => sum(["00", "000"])).toThrowError();
    expect(() => sum(["999", "999"])).toThrowError();
  });
});
