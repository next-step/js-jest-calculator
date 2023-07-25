import { sum, subtract, multiply, divide } from "../src/Calculator.js";

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
    expect(() => sum([999, 999])).toThrowError(); //1998
  });

  test("네 자리 이상 숫자 덧셈 테스트", () => {
    expect(() => sum([1000, 1000])).toThrowError(); //입력 4자리
    expect(() => sum([9999, 9999])).toThrowError(); //입력 4자리
  });

  test("실수 숫자 덧셈 테스트", () => {
    expect(() => sum([12.5, 10.1])).toThrowError(); //12.5는 소수점까지 4자리 수로 봄
    expect(() => sum([9.9, 999])).toThrowError(); //1008.9
    expect(sum([9.9, 0.5])).toBe(10);
  });

  test("'-' 포함한 숫자 테스트", () => {
    expect(() => sum([-999, 0])).toThrowError(); //입력 4자리, '-'도 자리수 포함
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
    expect(() => subtract([0, 999])).toThrowError(); //-999, '-'도 자리수 포함
    expect(subtract([999, 0])).toBe(999);
  });

  test("네 자리 이상 숫자 뺄셈 테스트", () => {
    expect(() => subtract([0, 1000])).toThrowError(); //입력 4자리
    expect(() => subtract([9999, 9999])).toThrowError(); //입력 4자리
  });

  test("실수 숫자 뺄셈 테스트", () => {
    expect(() => subtract([12.5, 10.1])).toThrowError(); //12.5는 소수점까지 4자리 수로 봄
    expect(() => subtract([9.9, 999])).toThrowError(); //-989.1, 소수점 버려도 4자리
    expect(subtract([9.9, 0.5])).toBe(9);
    expect(subtract([999, 9.9])).toBe(989);
  });

  test("'-' 포함한 숫자 테스트", () => {
    expect(() => subtract([-999, 0])).toThrowError(); //입력 4자리, '-'도 자리수 포함
    expect(() => subtract([-99, 999])).toThrowError(); //-1098
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

describe("곱셈 테스트", () => {
  test("한 자리 숫자 곱셈 테스트", () => {
    expect(multiply([0, 0])).toBe(0);
    expect(multiply([1, 1])).toBe(1);
    expect(multiply([1, 3])).toBe(3);
    expect(multiply([0, 3])).toBe(0);
    expect(multiply([3, 0])).toBe(0);
  });

  test("두 자리 숫자 곱셈 테스트", () => {
    expect(multiply([10, 10])).toBe(100);
    expect(() => multiply([99, 11])).toThrowError(); //1089
    expect(multiply([99, 10])).toBe(990);
  });

  test("세 자리 숫자 곱셈 테스트", () => {
    expect(() => multiply([999, 999])).toThrowError(); //998001
    expect(multiply([0, 999])).toBe(0);
    expect(multiply([999, 0])).toBe(0);
    expect(multiply([999, 1])).toBe(999);
    expect(() => multiply([999, 2])).toThrowError(); //1998
  });

  test("네 자리 이상 숫자 곱셈 테스트", () => {
    expect(() => multiply([0, 1000])).toThrowError(); //입력 4자리
    expect(() => multiply([9999, 9999])).toThrowError(); //입력 4자리
  });

  test("실수 숫자 곱셈 테스트", () => {
    expect(() => multiply([12.5, 10.1])).toThrowError(); //12.5는 소수점까지 4자리 수로 봄
    expect(() => multiply([9.9, 999])).toThrowError(); //9890.1
    expect(multiply([9.9, 9.9])).toBe(98);
    expect(multiply([100, 9.9])).toBe(990);
  });

  test("'-' 포함한 숫자 테스트", () => {
    expect(() => multiply([-999, 0])).toThrowError(); //입력 3자리 초과
    expect(() => multiply([-99, 999])).toThrowError(); //-98901
    expect(multiply([-99, -10])).toBe(990);
    expect(() => multiply([-99, 10])).toThrowError(); // -990
    expect(multiply([-99, 1])).toBe(-99);
    expect(() => multiply([-99, -99])).toThrowError(); // 9801
  });

  test("문자를 입력한 경우 에러가 발생한다", () => {
    expect(() => multiply(["100", "000"])).toThrowError();
    expect(() => multiply(["010", "1"])).toThrowError();
    expect(() => multiply(["00", "000"])).toThrowError();
    expect(() => multiply(["999", "999"])).toThrowError();
  });
});

describe("나눗셈 테스트", () => {
  test("한 자리 숫자 나눗셈 테스트", () => {
    expect(() => divide([0, 0])).toThrowError(); //0으로 나눌 수 없음
    expect(divide([0, 1])).toBe(0);
    expect(divide([1, 3])).toBe(0); //0.333... 소수점 버림
    expect(divide([9, 9])).toBe(1);
    expect(divide([9, 2])).toBe(4); //4.5 소수점 버림
  });

  test("두 자리 숫자 나눗셈 테스트", () => {
    expect(divide([10, 10])).toBe(1);
    expect(divide([99, 11])).toBe(9); //1089
    expect(divide([99, 10])).toBe(9); //9.9
    expect(divide([10, 99])).toBe(0); //0.101010...
    expect(divide([99, 99])).toBe(1);
    expect(() => divide([99, 0])).toThrowError(); //0으로 나눌 수 없음
  });

  test("세 자리 숫자 나눗셈 테스트", () => {
    expect(divide([999, 999])).toBe(1);
    expect(divide([0, 999])).toBe(0);
    expect(divide([999, 1])).toBe(999);
    expect(divide([999, 2])).toBe(499); //499.5
    expect(() => divide([999, 0])).toThrowError(); //0으로 나눌 수 없음
  });

  test("네 자리 이상 숫자 나눗셈 테스트", () => {
    expect(() => divide([0, 1000])).toThrowError(); //입력 4자리
    expect(() => divide([9999, 9999])).toThrowError(); //입력 4자리
  });

  test("실수 숫자 나눗셈 테스트", () => {
    expect(() => divide([12.5, 10.1])).toThrowError(); //12.5는 소수점까지 4자리 수로 봄
    expect(divide([9.9, 999])).toBe(0); //0.0099...
    expect(divide([9.9, 9.9])).toBe(1);
    expect(divide([100, 9.9])).toBe(10); //10.1010...
  });

  test("'-' 포함한 숫자 테스트", () => {
    expect(() => divide([-999, 0])).toThrowError(); // 입력 3자리 초과, 0으로 나눌 수 없음
    expect(divide([-99, 999])).toBe(0); // -0.099
    expect(divide([-99, -10])).toBe(9); // 9.9
    expect(divide([-99, 10])).toBe(-9); // -9.9
    expect(divide([-99, 1])).toBe(-99);
    expect(divide([-99, -99])).toBe(1);
  });

  test("문자를 입력한 경우 에러가 발생한다", () => {
    expect(() => divide(["100", "000"])).toThrowError();
    expect(() => divide(["010", "1"])).toThrowError();
    expect(() => divide(["00", "000"])).toThrowError();
    expect(() => divide(["999", "999"])).toThrowError();
  });
});
