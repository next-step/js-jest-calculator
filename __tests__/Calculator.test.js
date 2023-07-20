import { Calculator } from "../src/Calculator";

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
    it(`should return 0 when div(1, 2)`, () => {
      const result = Calculator.div(y, x)
      expect(result).toBe(2)
    })
  })
  