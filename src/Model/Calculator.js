export class Calculator {
  #result;

  constructor() {}

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
    console.log(this.#result);
  }
}
