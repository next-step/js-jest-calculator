import { sum, subtract } from "../src/Calculator.js";

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

  test("네 자리 이상 숫자 덧셈 테스트", () => {
    expect(() => sum([1000, 1000])).toThrowError();
    expect(() => sum([9999, 9999])).toThrowError();
  });

  test("실수 숫자 덧셈 테스트", () => {
    expect(() => sum([12.5, 10.1])).toThrowError(); //12.5는 소수점까지 4자리 수로 봄
    expect(() => sum([9.9, 999])).toThrowError();
    expect(() => sum(9.9, 0.5)).toBe(10);
  });

  test("'-' 포함한 숫자 테스트", () => {
    expect(() => sum([-999, 0])).toThrowError();
    expect(sum([-99, 999])).toBe(900);
    expect(sum([-0, -0])).toBe(0);
    expect(sum([-10, -10])).toBe(-20);
  });

  test("문자를 입력한 경우 에러가 발생한다", () => {
    expect(() => sum(["100", "000"])).toThrowError();
    expect(() => sum(["010", "1"])).toThrowError();
    expect(() => sum(["00", "000"])).toThrowError();
    expect(() => sum(["999", "999"])).toThrowError();
  });
});

describe("뺄셈 테스트", () => {
  test("한 자리 숫자 뺄셈 테스트", () => {
    expect(subtract([0, 0])).toBe(0);
    expect(subtract([1, 1])).toBe(0);
    expect(subtract([1, 3])).toBe(-2);
    expect(subtract([0, 3])).toBe(-3);
    expect(subtract([3, 0])).toBe(3);
  });

  test("두 자리 숫자 뺄셈 테스트", () => {
    expect(subtract([10, 10])).toBe(0);
    expect(subtract([99, 11])).toBe(88);
    expect(subtract([11, 99])).toBe(-88);
  });

  test("세 자리 숫자 뺄셈 테스트", () => {
    expect(subtract([999, 999])).toBe(0);
    expect(() => subtract([0, 999])).toThrowError();
    expect(subtract([999, 0])).toBe(999);
  });

  test("네 자리 이상 숫자 뺄셈 테스트", () => {
    expect(() => subtract([0, 1000])).toThrowError();
    expect(() => subtract([9999, 9999])).toThrowError();
  });

  test("실수 숫자 뺄셈 테스트", () => {
    expect(() => subtract([12.5, 10.1])).toThrowError(); //12.5는 소수점까지 4자리 수로 봄
    expect(() => subtract([9.9, 999])).toThrowError();
    expect(() => subtract([9.9, 0.5])).toBe(10);
    expect(() => subtract([999, 9.9])).toBe(989);
  });

  test("'-' 포함한 숫자 테스트", () => {
    expect(() => subtract([-999, 0])).toThrowError();
    expect(() => subtract([-99, 999])).toThrowError();
    expect(subtract([-0, -0])).toBe(0);
    expect(subtract([-99, -99])).toBe(0);
  });

  test("문자를 입력한 경우 에러가 발생한다", () => {
    expect(() => subtract(["100", "000"])).toThrowError();
    expect(() => subtract(["010", "1"])).toThrowError();
    expect(() => subtract(["00", "000"])).toThrowError();
    expect(() => subtract(["999", "999"])).toThrowError();
  });
});
