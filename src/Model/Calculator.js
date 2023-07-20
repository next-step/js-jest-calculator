export class Calculator {
  #number;

  constructor() {}

  add(firstInputNumber, secondInputNumber) {
    this.#number = firstInputNumber + secondInputNumber;
  }

  printResult(inputNumber) {
    this.#number = inputNumber;

    console.log(this.#number);
  }
}
