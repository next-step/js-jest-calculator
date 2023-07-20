export default class Calculator {
  sum(num1, num2) {
    this.validateOverThreeDigits([num1, num2]);
    return num1 + num2;
  }

  subtract(num1, num2) {
    this.validateOverThreeDigits([num1, num2]);
    return num1 - num2;
  }

  multiply(num1, num2) {
    this.validateOverThreeDigits([num1, num2]);
    return num1 * num2;
  }

  divide(num1, num2) {
    this.validateOverThreeDigits([num1, num2]);
    return num1 / num2;
  }

  validateOverThreeDigits(numbers) {
    const haveOverThreeDigits = numbers.some(
      (number) => String(number).length > 3
    );

    if (haveOverThreeDigits) {
      throw new Error('숫자는 한 번에 3자리까지 입력 가능합니다.');
    }
  }
}
