export default class Calculator {
  MAX_NUMBER_LENGTH = 3;
  checkNumberIsLessThenMaxLength(number) {
    const absNumber = Math.abs(number);
    return absNumber.toString().length <= this.MAX_NUMBER_LENGTH;
  }
  checkNumberCanCalculate(a, b) {
    return (
      this.checkNumberIsLessThenMaxLength(a) &&
      this.checkNumberIsLessThenMaxLength(b)
    );
  }
  makeNumberInteger(number) {
    return parseInt(number);
  }
  formatNumber(number) {
    return this.makeNumberInteger(number);
  }
  doCalculate(a, b, callback) {
    if (!this.checkNumberCanCalculate(a, b))
      throw new Error("숫자 입력은 최대 세자리까지 가능합니다.");
    return this.formatNumber(callback(a, b));
  }
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
}
