class Calculator {
  constructor(number1, number2, calculatedNumber) {
    this.number1 = number1;
    this.number2 = number2;
    this.calculatedNumber = calculatedNumber;
  }
  
  addNumber() {
    this.calculatedNumber = Math.floor(this.number1 + this.number2);
    return validateNumberLength(this.calculatedNumber);
  }

  substractNumber() {
    this.calculatedNumber = Math.floor(this.number1 - this.number2);
    return validateNumberLength(this.calculatedNumber);
  }

  multiplyNumber() {
    this.calculatedNumber = Math.floor(this.number1 * this.number2);
    return validateNumberLength(this.calculatedNumber);
  }

  divideNumber() {
    this.calculatedNumber = Math.floor(this.number1 / this.number2);
    return validateNumberLength(this.calculatedNumber);
  }

  validateNumberLength(number) {
    if (number.toString().length > 3) return false;
    return number;
  }
}