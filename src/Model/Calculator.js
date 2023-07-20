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
      this.#validator = new Validator(firstInputNumber, secondInputNumber);
      this.#validator.checkValueValidation();
    } catch (error) {
      this.#outputView.printError(error);
    }
  }

  sum(firstInputNumber, secondInputNumber) {
    this.#checkValueValidation(firstInputNumber, secondInputNumber);
    this.#result = firstInputNumber + secondInputNumber;

    this.#printResult();
  }

  substract(firstInputNumber, secondInputNumber) {
    this.#checkValueValidation(firstInputNumber, secondInputNumber);
    this.#result = firstInputNumber - secondInputNumber;

    this.#printResult();
  }

  multiply(firstInputNumber, secondInputNumber) {
    this.#checkValueValidation(firstInputNumber, secondInputNumber);
    this.#result = firstInputNumber * secondInputNumber;

    this.#printResult();
  }

  divide(firstInputNumber, secondInputNumber) {
    this.#checkValueValidation(firstInputNumber, secondInputNumber);
    this.#result = firstInputNumber / secondInputNumber;

    this.#printResult();
  }

  #printResult() {
    this.#outputView.printResult(this.#result);
  }
}
