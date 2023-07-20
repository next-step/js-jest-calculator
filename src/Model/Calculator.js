import { OutputView } from "../View/outputView";

export class Calculator {
  #result;
  #view;

  constructor() {
    this.#view = OutputView;
  }

  sum(firstInputNumber, secondInputNumber) {
    this.#result = firstInputNumber + secondInputNumber;

    this.#printResult();
  }

  substract(firstInputNumber, secondInputNumber) {
    this.#result = firstInputNumber - secondInputNumber;

    this.#printResult();
  }

  multiply(firstInputNumber, secondInputNumber) {
    this.#result = firstInputNumber * secondInputNumber;

    this.#printResult();
  }

  divide(firstInputNumber, secondInputNumber) {
    this.#result = firstInputNumber / secondInputNumber;

    this.#printResult();
  }

  #printResult() {
    this.#view.printResult(this.#result);
  }
}
