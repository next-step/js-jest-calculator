import { describe, expect, test } from "@jest/globals";

import { Calculator, InvalidOperandError } from "../src";

describe("Calculator", () => {
  const calculator = new Calculator();

  // Good cases
  test.each([
    [1, 2, 3],
    [11, 22, 33],
    [888, 888, 1776],
    [0.5, 0.5, 1],
    [0.5, 0.9, 1],
  ])("add", (param1, param2, expected) => {
    expect(calculator.add(param1, param2)).toEqual(expected);
  });

  test.each([
    [2, 1, 1],
    [22, 11, 11],
    [222, 111, 111],
    [0.5, 0.5, 0],
    [1.5, 0.5, 1],
  ])("subtract", (param1, param2, expected) => {
    expect(calculator.subtract(param1, param2)).toEqual(expected);
  });

  test.each([
    [2, 1, 2],
    [22, 11, 242],
    [222, 111, 24642],
    [0.5, 0.5, 0],
    [1.5, 1.5, 2],
  ])("multifly", (param1, param2, expected) => {
    expect(calculator.multiply(param1, param2)).toEqual(expected);
  });

  test.each([
    [2, 1, 2],
    [22, 11, 2],
    [222, 111, 2],
    [0.5, 0.5, 1],
    [1, 1.5, 0],
  ])("division", (param1, param2, expected) => {
    expect(calculator.divide(param1, param2)).toBe(expected);
  });

  // Bad cases
  test.each([
    [1234, 0],
    [0, 1234],
    [1234, 5678],
  ])("throws InvalidOperandError", (param1, param2) => {
    expect(() => calculator.add(param1, param2)).toThrow(InvalidOperandError);
    expect(() => calculator.subtract(param1, param2)).toThrow(
      InvalidOperandError
    );
    expect(() => calculator.multiply(param1, param2)).toThrow(
      InvalidOperandError
    );
    expect(() => calculator.divide(param1, param2)).toThrow(
      InvalidOperandError
    );
  });
});
