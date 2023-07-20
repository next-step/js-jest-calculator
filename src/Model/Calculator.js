export class Calculator {
  #result;

  constructor() {}

  sum(firstInputNumber, secondInputNumber) {
    this.#result = firstInputNumber + secondInputNumber;
  }

  substract(firstInputNumber, secondInputNumber) {
    this.#result = firstInputNumber - secondInputNumber;
  }

  multiply(firstInputNumber, secondInputNumber) {
    this.#result = firstInputNumber * secondInputNumber;
  }

  divide(firstInputNumber, secondInputNumber) {
    this.#result = firstInputNumber / secondInputNumber;
  }

  printResult(inputNumber) {
    this.#result = inputNumber;

    console.log(this.#result);
  }
}
