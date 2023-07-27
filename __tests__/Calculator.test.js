import Calculator from "../src/Calculator";
import { ERROR_MESSAGES } from "../src/constants";

const calculator = new Calculator();

describe("정상적인 두 수를 입력할 때", () => {
  describe("두 수를 더할 경우", () => {
    it("1 + 2 는 3 이다.", () => {
      expect(calculator.sum(1, 2)).toBe(3);
    });
  
    it("-1 + (-1) 는 -2 이다.", () => {
      expect(calculator.sum(-1, -1)).toBe(-2);
    });
  });
  
  describe("두 수를 뺄 경우", () => {
    it("5 - 2 는 3 이다.", () => {
      expect(calculator.substract(5, 2)).toBe(3);
    });
  
    it("4.5 - 3 은 1 이다.", () => {
      expect(calculator.substract(4.5, 3)).toBe(1);
    });
  });
  
  describe("두 수를 곱할 경우", () => {
    it("1 * 3 는 3 이다.", () => {
      expect(calculator.multiply(1, 3)).toBe(3);
    });
  
    it("4 * (-2) 는 -8 이다.", () => {
      expect(calculator.multiply(4, -2)).toBe(-8);
    });
  });
  
  describe("두 수를 나눌 경우", () => {
    it("6 / 3 는 2이다.", () => {
      expect(calculator.divide(6, 3)).toBe(2);
    });
    
    it("10 / 3 는 3이다.", () => {
      expect(calculator.divide(10, 3)).toBe(3);
    });
  });
});

describe("비정상적인 입력이 있을 때", () => {
  describe("숫자가 아닌 값을 입력할 경우", () => {
    it("두 값을 입력하지 않으면 에러를 던진다.", () => {
      try {
        calculator.sum();
      } catch(e) {
        expect(e.message).toBe(ERROR_MESSAGES.MUST_BE_NUM_TYPE);
      }
    });

    it("문자열을 입력하면 에러를 던진다.", () => {
      try {
        calculator.substract("0", 1);
      } catch(e) {
        expect(e.message).toBe(ERROR_MESSAGES.MUST_BE_NUM_TYPE);
      }
    });

    it("null을 입력하면 에러를 던진다.", () => {
      try {
        calculator.substract(null, 1);
      } catch(e) {
        expect(e.message).toBe(ERROR_MESSAGES.MUST_BE_NUM_TYPE);
      }
    });
  });

  describe("4자리 이상의 수를 입력할 경우", () => {
    it("1000 이상의 수를 입력하면 에러를 던진다.", () => {
      try {
        calculator.multiply(1, 2000);
      } catch(e) {
        expect(e.message).toBe(ERROR_MESSAGES.EXCEED_MAX_LENGTH);
      }
    });

    it("-1000 이하의 수를 입력하면 에러를 던진다.", () => {
      try {
        calculator.sum(-1000, 100);
      } catch(e) {
        expect(e.message).toBe(ERROR_MESSAGES.EXCEED_MAX_LENGTH);
      }
    });
  });

  describe("0으로 나눌 경우", () => {
    it("피연산자에 0을 입력하면 에러를 던진다.", () => {
      try {
        calculator.divide(10, 0);
      } catch(e) {
        expect(e.message).toBe(ERROR_MESSAGES.CANT_DIVIDE_BY_ZERO);
      }
    });
  });
});