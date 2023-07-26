import { Calculator } from "../src";
import { ERROR_MESSAGE } from "../src/constants";

const calculator = new Calculator();

describe("2개의 숫자에 대해 덧셈이 가능하다.", () => {
  test("3.2와 2의 합은 5이다.", () => {
    expect(calculator.sum(3.2, 2)).toBe(5);
  });
  test("-1과 1의 합은 0이다.", () => {
    expect(calculator.sum(-1, 1)).toBe(0);
  });
  test("1과 1의 합은 2이다.", () => {
    expect(calculator.sum(1, 1)).toBe(2);
  });
});

describe("2개의 숫자에 대해 뺄셈이 가능하다.", () => {
  test("3.2와 2의 차는 1이다.", () => {
    expect(calculator.subtract(3.2, 2)).toBe(1);
  });
  test("-1과 1의 차는 -2이다.", () => {
    expect(calculator.subtract(-1, 1)).toBe(-2);
  });
  test("1과 1의 차는 0이다.", () => {
    expect(calculator.subtract(1, 1)).toBe(0);
  });
});

describe("2개의 숫자에 대해 곱셈이 가능하다.", () => {
  test("3.2와 2의 곱은 6이다.", () => {
    expect(calculator.multiply(3.2, 2)).toBe(6);
  });
  test("-1과 1의 곱은 -1이다.", () => {
    expect(calculator.multiply(-1, 1)).toBe(-1);
  });
  test("1과 1의 곱은 1이다.", () => {
    expect(calculator.multiply(1, 1)).toBe(1);
  });
});

describe("2개의 숫자에 대해 나눗셈이 가능하다.", () => {
  test("3.2와 2의 나눗셈은 1이다.", () => {
    expect(calculator.divide(3.2, 2)).toBe(1);
  });
  test("-1과 1의 나눗셈은 -1이다.", () => {
    expect(calculator.divide(-1, 1)).toBe(-1);
  });
  test("1과 1의 나눗셈은 1이다.", () => {
    expect(calculator.divide(1, 1)).toBe(1);
  });
});

describe("숫자는 한번에 최대 3자리 수까지만 다룰 수 있다.", () => {
  it("3자리 수를 벗어나면 에러가 발생한다.", () => {
    try {
      calculator.sum(1000, 2);
    } catch (error) {
      expect(error.message).toBe(ERROR_MESSAGE.NUMBER_SCOPE);
    }
  });

  it("3자리 수를 벗어나면 에러가 발생한다.", () => {
    try {
      calculator.subtract(0, -1000);
    } catch (error) {
      expect(error.message).toBe(ERROR_MESSAGE.NUMBER_SCOPE);
    }
  });

  it("3자리 수를 벗어나면 에러가 발생한다.", () => {
    try {
      calculator.divide(0, -1000);
    } catch (error) {
      expect(error.message).toBe(ERROR_MESSAGE.NUMBER_SCOPE);
    }
  });

  it("3자리 수를 벗어나지 않으면 에러가 발생하지 않는다.", () => {
    try {
      expect(calculator.multiply(0, 100)).toBe(0);
    } catch (error) {
      expect(error.message).toBe(ERROR_MESSAGE.NUMBER_SCOPE);
    }
  });
});
