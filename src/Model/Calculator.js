export class Calculator {
  #number;

  constructor() {}

  printResult(inputNumber) {
    this.#number = inputNumber;

    console.log(this.#number);
  }
}
