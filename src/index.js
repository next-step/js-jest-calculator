class InvalidOperandError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidOperandError";
  }
}

class Calculator {
  #checkOperand(operand) {
    if (operand >= 1000) {
      throw new InvalidOperandError("Too big number");
    }
  }

  add(a, b) {
    this.#checkOperand(a);
    this.#checkOperand(b);
    return Math.floor(a + b);
  }

  subtract(a, b) {
    this.#checkOperand(a);
    this.#checkOperand(b);
    return Math.floor(a - b);
  }

  multiply(a, b) {
    this.#checkOperand(a);
    this.#checkOperand(b);
    return Math.floor(a * b);
  }

  divide(a, b) {
    this.#checkOperand(a);
    this.#checkOperand(b);
    return Math.floor(a / b);
  }
}

export { Calculator, InvalidOperandError };
