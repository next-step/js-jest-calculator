import { OutputView } from './View/outputView';
import { Validator } from './Model/Validator';

export class Calculator {
  #result;
  #outputView;
  #validator;

  constructor() {
    this.#outputView = OutputView;
  }

  #checkValueValidation(firstInputNumber, secondInputNumber) {
    try {
      this.#validator = new Validator(
        firstInputNumber,
        secondInputNumber,
        arguments
      );
      this.#validator.checkValueValidation();

      return true;
    } catch (error) {
      this.#outputView.printError(error.message);

      return false;
    }
  }

  #getOperation(operation, firstInputNumber, secondInputNumber) {
    const isValidValue = this.#checkValueValidation(
      firstInputNumber,
      secondInputNumber
    );

    if (isValidValue) {
      this.#result = operation(firstInputNumber, secondInputNumber);

      this.#printResult();
    }
  }

  sum(firstInputNumber, secondInputNumber) {
    this.#getOperation((a, b) => a + b, firstInputNumber, secondInputNumber);
  }

  substract(firstInputNumber, secondInputNumber) {
    this.#getOperation((a, b) => a - b, firstInputNumber, secondInputNumber);
  }

  multiply(firstInputNumber, secondInputNumber) {
    this.#getOperation((a, b) => a * b, firstInputNumber, secondInputNumber);
  }

  divide(firstInputNumber, secondInputNumber) {
    this.#getOperation((a, b) => a / b, firstInputNumber, secondInputNumber);
  }

  #printResult() {
    this.#outputView.printResult(this.#result);
  }
}
