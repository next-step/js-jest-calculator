export default class Calculator {
  add(a, b) {
    return this.toFixedThree(this.floor(a + b));
  }
  subtract(a, b) {
    return this.toFixedThree(this.floor(a - b));
  }
  multiply(a, b) {
    return this.toFixedThree(this.floor(a * b));
  }
  divide(a, b) {
    return this.toFixedThree(this.floor(a / b));
  }
  floor(a) {
    return Math.floor(a);
  }
  toFixedThree(a) {
    return a % 1000;
  }
}
