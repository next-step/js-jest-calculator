export default class Calculator {
  constructor() {
    this.operators = {
      add: (number1, number2) => number1 + number2,
      substract: (number1, number2) => number1 - number2,
      multiply: (number1, number2) => number1 * number2,
      divide: (number1, number2) => {
        if (number2 === 0) throw new Error("0으로 나눌 수 없습니다.");
        return number1 / number2;
      },
    };
  }

  calculate(operator, number1, number2) {
    if (!this.operators[operator]) {
      throw new Error("현재 지원하지 않는 연산자입니다.");
    }

    this.validateNumberLength(number1, number2);
    return Math.floor(this.operators[operator](number1, number2));
  }

  validateNumberLength(number1, number2) {
    if (number1.toString().length > 3 || number2.toString().length > 3) {
      throw new Error("숫자 입력은 최대 3자리 수까지 가능합니다.");
    }
  }
}
