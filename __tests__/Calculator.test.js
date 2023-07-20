import { Calculator } from "../src/Calculator";
import { ERROR } from "../src/constants";

describe("Calculator", () => {
  describe("sum", () => {
    it("should return the sum of two numbers", () => {
      expect(Calculator.sum(1, 2)).toBe(3);
    });
  });

  describe("sub", () => {
    it("should return the difference of two numbers", () => {
      expect(Calculator.sub(1, 2)).toBe(-1);
    });
  });

  describe("mul", () => {
    it("should return the product of two numbers", () => {
      expect(Calculator.mul(2, 1)).toBe(2);
    });
  });

  describe("div", () => {
    it("should return the quotient of two numbers", () => {
      expect(Calculator.div(2, 1)).toBe(2);
    });
  })

  describe("validation", () => {
    
    it("should throw an error when the divisor is not a number", () => {
      expect(() => Calculator.div(1, "a")).toThrow(ERROR.TYPE_NAN);
    });
    
    it("should throw an error when the dividend or divisor is greater than or equal to 1000", () => {
      expect(() => Calculator.div(1000, 1)).toThrow(ERROR.LESS_THAN_1000);
      expect(() => Calculator.div(-1000, 1)).toThrow(ERROR.GREATER_THAN_MINUS_1000);
    });
  })

  describe("rounding", () => {
    it("should round off decimal point when adding two numbers", () => {
      expect(Calculator.sum(1.1, 1.123)).toBe(2);
    });

    it("should round off decimal point when dividing two numbers", () => {
      expect(Calculator.div(1, 3)).toBe(0);
    });
  });
});