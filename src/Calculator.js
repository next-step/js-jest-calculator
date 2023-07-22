import { validator } from "./Validation";

/**
 * Calculator object with arithmetic functions.
 * @namespace
 */
export const Calculator = {
  /**
   * Adds two numbers and returns the truncated result.
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @returns {number} The truncated sum of the two numbers.
   */
  sum: (a, b) => {
    if (validator(a, b)) {
      return Math.trunc(a + b);
    }
  },

  /**
   * Subtracts two numbers and returns the truncated result.
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @returns {number} The truncated difference of the two numbers.
   */
  sub: (a, b) => {
    if (validator(a, b)) {
      return Math.trunc(a - b);
    }
  },

  /**
   * Multiplies two numbers and returns the truncated result.
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @returns {number} The truncated product of the two numbers.
   */
  mul: (a, b) => {
    if (validator(a, b)) {
      return Math.trunc(a * b);
    }
  },

  /**
   * Divides two numbers and returns the truncated result.
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @returns {number} The truncated quotient of the two numbers.
   */
  div: (a, b) => {
    if (validator(a, b)) {
      return Math.trunc(a / b);
    }
  },
};