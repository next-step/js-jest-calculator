export class Calculator {
  a = null;
  b = null;
  operator = null;
  #result = null;

  constructor() {}
  
  add(a, b) {
    this.#checkNumber(a, b);
    this.result = a + b;
  }
  minus(a, b) {
    this.#checkNumber(a, b);
    this.result = a - b;
  }
  multiply(a, b) {
    this.#checkNumber(a, b);
    this.result = a * b;
  }
  divide(a, b) {
    this.#checkNumber(a, b);
    this.result = a / b;
  }

  insertNumber(aNumber) {
    let existNumber = this.operator ? this.b : this.a;
    existNumber = (existNumber ?? "") + String(aNumber);

    if (existNumber.length > 3) {
      throw Error("숫자는 한번에 최대 3자리 수까지만 다룰 수 있습니다");
    }

    if (this.operator) {
      this.b = +existNumber;
    } else {
      this.a = +existNumber;
    }
  }

  get result() {
    return this.#result;
  }
  set result(aNumber) {
    this.#result = Math.floor(aNumber);
  }

  #checkNumber(...numbers) {
    for (let aNumber of numbers) {
      if (typeof aNumber !== "number") {
        throw Error("Not type Number");
      }
    }

    return numbers;
  }
}
