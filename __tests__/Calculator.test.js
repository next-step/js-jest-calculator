import { describe, expect, test } from "@jest/globals";

import { Calculator } from "../src";

describe("Calculator", () => {
  const calculator = new Calculator();

  test("1 plus 2 should equal 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test("2 minus 1 should be 1", () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  });

  test("3 times 4 should be 12", () => {
    expect(calculator.multiply(3, 4)).toBe(12);
  });

  test("4 division by 2 should be 2", () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });
});
