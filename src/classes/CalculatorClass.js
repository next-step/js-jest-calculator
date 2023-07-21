export default class Calculator {
  constructor(calculatedNumber, isValidNumber) {
    this.calculatedNumber = calculatedNumber;
    this.isValidNumber = isValidNumber;
  }

  addNumber(number1, number2) {
    this.isValidNumber = this.validateNumberLength(number1, number2);

    if (this.isValidNumber) {
      this.calculatedNumber = Math.floor(number1 + number2);
      return this.calculatedNumber;
    }
  }

  substractNumber(number1, number2) {
    this.isValidNumber = this.validateNumberLength(number1, number2);

    if (this.isValidNumber) {
      this.calculatedNumber = Math.floor(number1 - number2);
      return this.calculatedNumber;
    }
  }

  multiplyNumber(number1, number2) {
    this.isValidNumber = this.validateNumberLength(number1, number2);

    if (this.isValidNumber) {
      this.calculatedNumber = Math.floor(number1 * number2);
      return this.calculatedNumber;
    }
  }

  divideNumber(number1, number2) {
    if (number2 === 0) throw new Error("0으로는 나눌 수 없습니다.");

    this.isValidNumber = this.validateNumberLength(number1, number2);

    if (this.isValidNumber) {
      this.calculatedNumber = Math.floor(number1 / number2);
      return this.calculatedNumber;
    }
  }

  validateNumberLength(number1, number2) {
    if (number1.toString().length > 3 || number2.toString().length > 3) {
      throw new Error("숫자 입력은 최대 3자리 수까지 가능합니다.");
    }

    return true;
  }
}
