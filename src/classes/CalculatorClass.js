export default class Calculator {
  constructor(calculatedNumber) {
    this.calculatedNumber = calculatedNumber;
  }

  addNumber(number1, number2) {
    this.calculatedNumber = Math.floor(number1 + number2);
    return this.validateNumberLength(this.calculatedNumber);
  }

  substractNumber(number1, number2) {
    this.calculatedNumber = Math.floor(number1 - number2);
    return this.validateNumberLength(this.calculatedNumber);
  }

  multiplyNumber(number1, number2) {
    this.calculatedNumber = Math.floor(number1 * number2);
    return this.validateNumberLength(this.calculatedNumber);
  }

  divideNumber(number1, number2) {
    if (number2 === 0) throw new Error("0으로는 나눌 수 없습니다.");

    this.calculatedNumber = Math.floor(number1 / number2);
    return this.validateNumberLength(this.calculatedNumber);
  }

  validateNumberLength(number) {
    if (number.toString().length > 3) {
      throw new Error("계산은 최대 3자리 수까지 가능합니다.");
    }

    return number;
  }
}
