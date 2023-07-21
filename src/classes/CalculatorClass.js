class Calculator {
  constructor(number1, number2, operator) {
    this.number1 = number1;
    this.number2 = number2;
    this.operator = operator;  
  }
  
  addNumber() {
    return Math.floor(this.number1 + this.number2);
  }

  substractNumber() {
    return Math.floor(this.number1 - this.number2);
  }

  multiplyNumber() {
    return Math.floor(this.number1 * this.number2);
  }

  divideNumber() {
    return Math.floor(this.number1 / this.number2);
  }
}