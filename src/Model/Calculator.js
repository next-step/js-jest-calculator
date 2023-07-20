import { OutputView } from "../View/outputView";
import { Validator } from "../utils/Validator";

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

  sum(firstInputNumber, secondInputNumber) {
    const isValidValue = this.#checkValueValidation(
      firstInputNumber,
      secondInputNumber
    );

    if (isValidValue) {
      this.#result = firstInputNumber + secondInputNumber;

      this.#printResult();
    }
  }

  substract(firstInputNumber, secondInputNumber) {
    const isValidValue = this.#checkValueValidation(
      firstInputNumber,
      secondInputNumber
    );

    if (isValidValue) {
      this.#result = firstInputNumber - secondInputNumber;

      this.#printResult();
    }
  }

  multiply(firstInputNumber, secondInputNumber) {
    const isValidValue = this.#checkValueValidation(
      firstInputNumber,
      secondInputNumber
    );

    if (isValidValue) {
      this.#result = firstInputNumber * secondInputNumber;

      this.#printResult();
    }
  }

  divide(firstInputNumber, secondInputNumber) {
    const isValidValue = this.#checkValueValidation(
      firstInputNumber,
      secondInputNumber
    );

    if (isValidValue) {
      this.#result = firstInputNumber / secondInputNumber;

      this.#printResult();
    }
  }

  #printResult() {
    this.#outputView.printResult(this.#result);
  }
}
