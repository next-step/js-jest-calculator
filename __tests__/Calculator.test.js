import { Calculator } from "../src/Calculator";
import { ERROR } from "../src/constants";
  const x = 1
  const y = 2
  

  describe("sum", () => {
    it(`should return 3 when sum(1, 2)`, () => {
      const result = Calculator.sum(x, y)
      expect(result).toBe(x+y)
    })
  })

  describe("sub", () => {
    it(`should return -1 when sub(1, 2)`, () => {
      const result = Calculator.sub(x, y)
      expect(result).toBe(-1)
    })
  })

  describe("mul", () => {
    it(`should return 2 when mul(2, 1)`, () => {
      const result = Calculator.mul(x, y)
      expect(result).toBe(2)
    })
  })

  describe("div", () => {
    it(`should return 0 when div(2, 1)`, () => {
      const result = Calculator.div(y, x)
      expect(result).toBe(2)
    })
  })
  
  /// Test for validation
  describe("validation", () => {
    it(`should throw Error 'a and b must be less than 1000' when sum(1000, 1)`, () => {
      expect(() => Calculator.div(1000, 1)).toThrow(ERROR["LESS_THAN_1000"])
    })
  })

  describe("validation", () => {
    it(`should throw Error 'a and b must be greater than -1000' when sum(-1000, 1)`, () => {
      expect(() => Calculator.div(-1000, 1)).toThrow(ERROR["GREATER_THAN_MINUS_1000"])
    })
  })

  describe("validation", () => {
    it(`should throw Error 'a and b must be numbers' when sum('10', '2')`, () => {
      expect(() => Calculator.sum('10', '2')).toThrow(ERROR["TYPE_NAN"])
    })
  })

  describe("validation", () => {
    it('should round off decimal point when sum(1.1, 1.123)', () => {
      const result = Calculator.sum(1.1, 1.123)
      expect(result).toBe(2)
    })
  })

  describe("validation", () => {
    it('should round off decimal point when div(1, 3)', () => {
      const result = Calculator.div(1, 3)
      expect(result).toBe(0)
    })
  })
  