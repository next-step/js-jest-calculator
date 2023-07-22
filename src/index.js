export class Calculator {
  constructor() {
    this.operator = "none";
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.displayNumber = 0;
    this.isEnteringNumber = true;
  }

  onClickNumber(number) {
    if (
      (this.operator === "none" || this.displayNumber === "숫자아님") &&
      this.isEnteringNumber
    ) {
      this.firstNumber = this.displayNumber =
        this.firstNumber > -100 && this.firstNumber < 100
          ? Number(`${this.firstNumber}${number}`)
          : this.firstNumber;
      return;
    }

    if (!this.isEnteringNumber) {
      this.secondNumber = this.displayNumber = Number(number);
      this.isEnteringNumber = true;
      return;
    }

    if (this.secondNumber > -100 && this.secondNumber < 100) {
      this.secondNumber = this.displayNumber = Number(
        `${this.secondNumber}${number}`,
      );
    }
  }

  onClickOperator(operator) {
    if (this.displayNumber === "숫자아님") {
      return;
    }

    if (this.operator === "+") {
      this.firstNumber = this.displayNumber =
        this.firstNumber + this.secondNumber;
    }

    if (this.operator === "x") {
      this.firstNumber = this.displayNumber =
        this.firstNumber * this.secondNumber;
    }

    if (this.operator === "-") {
      this.firstNumber = this.displayNumber =
        this.firstNumber - this.secondNumber;
    }

    if (this.operator === "÷" && this.secondNumber === 0) {
      this.displayNumber = "숫자아님";
    }

    if (this.operator === "÷" && this.secondNumber !== 0) {
      this.firstNumber = this.displayNumber = Math.floor(
        this.firstNumber / this.secondNumber,
      );
    }

    this.isEnteringNumber = false;

    if (operator !== "=") {
      this.operator = operator;
    }
  }
}
