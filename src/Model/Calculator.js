export class Calculator {
  #result;

  constructor() {}

  sum(firstInputNumber, secondInputNumber) {
    this.#result = firstInputNumber + secondInputNumber;
  }

  printResult(inputNumber) {
    this.#result = inputNumber;

    console.log(this.#result);
  }
}
