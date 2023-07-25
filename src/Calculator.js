import CustomError from './Error.js';

class Calculator {
  #MAX_DIGITS = 1_000;

  sum(num1, num2) {
    if (!this.isValid(num1, num2)) {
      throw CustomError.DIGITS;
    }

    return Math.floor(num1 + num2);
  }

  subtract(num1, num2) {
    if (!this.isValid(num1, num2)) {
      throw CustomError.DIGITS;
    }

    return Math.floor(num1 - num2);
  }

  multiply(num1, num2) {
    if (!this.isValid(num1, num2)) {
      throw CustomError.DIGITS;
    }

    return Math.floor(num1 * num2);
  }

  divide(num1, num2) {
    if (!this.isValid(num1, num2)) {
      throw CustomError.DIGITS;
    }

    if (num2 === 0) {
      throw CustomError.DIVISION;
    }

    return Math.floor(num1 / num2);
  }

  // Float operation toFixed(2) b/c Not Exact operation for computer

  fsum(num1, num2) {
    if (!this.isValid(num1, num2)) {
      throw CustomError.DIGITS;
    }

    return Number((num1 + num2).toFixed(2));
  }

  fsubtract(num1, num2) {
    if (!this.isValid(num1, num2)) {
      throw CustomError.DIGITS;
    }

    return Number((num1 - num2).toFixed(2));
  }

  fmultiply(num1, num2) {
    if (!this.isValid(num1, num2)) {
      throw CustomError.DIGITS;
    }

    return Number((num1 * num2).toFixed(2));
  }

  fdivide(num1, num2) {
    if (!this.isValid(num1, num2)) {
      throw CustomError.DIGITS;
    }

    if (num2 === 0) {
      throw CustomError.DIVISION;
    }

    return Number((num1 / num2).toFixed(2));
  }

  isValid(num1, num2) {
    return num1 < this.#MAX_DIGITS && num2 < this.#MAX_DIGITS;
  }
}

export default Calculator;
