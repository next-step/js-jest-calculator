import { Calculator } from "../src/Model/Calculator";

describe("Calculator test", () => {
  let calculator;
  let logSpy;

  beforeEach(() => {
    calculator = new Calculator();
    logSpy = jest.spyOn(console, "log");
    logSpy.mockImplementation(() => {}); // prevent actual console.log
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  // 2단계 테스트
  describe("산술 연산", () => {
    test("2개의 숫자에 대해 덧셈이 가능하다", () => {
      calculator.sum(1, 2);
      expect(logSpy).toHaveBeenCalledWith("3");
    });

    test("2개의 숫자에 대해 뺄셈이 가능하다", () => {
      calculator.substract(5, 2);
      expect(logSpy).toHaveBeenCalledWith("3");
    });

    test("2개의 숫자에 대해 곱셈이 가능하다", () => {
      calculator.multiply(2, 3);
      expect(logSpy).toHaveBeenCalledWith("6");
    });

    test("2개의 숫자에 대해 나눗셈이 가능하다", () => {
      calculator.divide(10, 2);
      expect(logSpy).toHaveBeenCalledWith("5");
    });
  });

  // 3단계 테스트
  test("계산 결과를 표현할 때 소수점 이하는 버림한다", () => {
    calculator.divide(10, 3);
    expect(logSpy).toHaveBeenCalledWith("3");
  });

  // 4단계 테스트
  test("입력값이 빈 문자열이면 오류가 발생해야 한다", () => {
    expect(() => {
      calculator.sum("", 1);
    }).toThrow();
  });

  test("입력값이 2개가 아니면 오류가 발생해야 한다", () => {
    expect(() => {
      calculator.sum(1);
    }).toThrow();

    expect(() => {
      calculator.divide(1, 2, 3);
    }).toThrow();
  });

  test("데이터 타입이 숫자가 아니면 오류가 발생해야 한다", () => {
    expect(() => {
      calculator.sum("1", 2);
    }).toThrow();
  });

  test("입력값이 소수이면 오류가 발생해야 한다", () => {
    expect(() => {
      calculator.sum(1.2, 2);
    }).toThrow();
  });
});
