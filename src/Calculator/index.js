import { validateNumbers } from "../utils";
class Calculator {
  sum(a, b) {
    validateNumbers(a, b);

    return Math.floor(a + b);
  }

  subtract(a, b) {
    validateNumbers(a, b);

    return Math.floor(a - b);
  }

  multiply(a, b) {
    validateNumbers(a, b);

    return Math.floor(a * b);
  }

  divide(a, b) {
    validateNumbers(a, b);

    return Math.floor(a / b);
  }
}

export default Calculator;
