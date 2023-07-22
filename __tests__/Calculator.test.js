import { calculator } from "../src/index";

describe("기능 요구사항", () => {
  test(" 2개의 숫자에 대해 덧셈이 가능하다.", () => {
    let result = calculator.sum(1, 2);
    expect(result).toBe(3);
  });
  test(" 2개의 숫자에 대해 뺄셈이 가능하다.", () => {
    let result = calculator.substract(1, 2);
    expect(result).toBe(-1);
  });
  test("2개의 숫자에 대해 곱셈이 가능하다.", () => {
    let result = calculator.multiply(1, 2);
    expect(result).toBe(2);
  });
  test("2개의 숫자에 대해 나눗셈이 가능하다.", () => {
    let result = calculator.divide(2, 1);
    expect(result).toBe(2);
  });
  test("계산 결과를 표현할 때 소수점 이하는 버림할 수 있어야 한다.", () => {
    let result = calculator.divide(1, 2);
    expect(result).toBe(0);
  });
});

describe("계산기 예외 처리 테스트", () => {
  test("숫자만 받기", () => {
    let result = calculator.sum(1, "2");
    expect(result).toBe("숫자 타입이 아닙니다.");
  });

  test("숫자는 한번에 최대 3자리 수까지만 다룰 수 있다.", () => {
    let result = calculator.sum(-1, -1234);
    expect(result).not.toBe(-1235);
  });
});
