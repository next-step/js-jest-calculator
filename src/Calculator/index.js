import { validateNumbers, getOnlyInteger } from "../utils";
class Calculator {
  sum(a, b) {
    validateNumbers(a, b);

    return getOnlyInteger(a + b);
  }

  subtract(a, b) {
    validateNumbers(a, b);

    return getOnlyInteger(a - b);
  }

  multiply(a, b) {
    validateNumbers(a, b);

    return getOnlyInteger(a * b);
  }

  divide(a, b) {
    validateNumbers(a, b);

    return getOnlyInteger(a / b);
  }
}

export default Calculator;
