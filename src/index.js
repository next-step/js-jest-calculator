export class Calculator {
  checkNumberLength(num01, num02) {
    if (num01 / 1000 >= 1 || num02 / 1000 >= 1) {
      return false;
    }

    return true;
  }

  floorNumber(number) {
    return Math.floor(number);
  }

  add(num01, num02) {
    if (arguments.length > 2) return null;
    if (!this.checkNumberLength(num01, num02)) return null;
    return this.floorNumber(num01 + num02);
  }

  sub(num01, num02) {
    if (arguments.length > 2) return null;
    if (!this.checkNumberLength(num01, num02)) return null;
    return this.floorNumber(num01 - num02);
  }

  mul(num01, num02) {
    if (arguments.length > 2) return null;
    if (!this.checkNumberLength(num01, num02)) return null;
    return this.floorNumber(num01 * num02);
  }

  div(num01, num02) {
    if (arguments.length > 2) return null;
    if (!this.checkNumberLength(num01, num02)) return null;
    return this.floorNumber(num01 / num02);
  }
}

let calculator = new Calculator();

let addNumber = calculator.add(10, 20);
let subNumber = calculator.sub(40, 20);
let mulNumber = calculator.mul(10, 20);
let divNumber = calculator.div(40, 20);

console.log(addNumber, subNumber, mulNumber, divNumber);
