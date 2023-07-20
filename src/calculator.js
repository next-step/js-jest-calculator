export default class Calculator {
  sum(...args) {
    this.validateOverThreeDigits(args);
    return Math.floor(args.reduce((prev, curr) => prev + curr));
  }

  subtract(...args) {
    this.validateOverThreeDigits(args);
    return Math.floor(args.reduce((prev, curr) => prev - curr));
  }

  multiply(...args) {
    this.validateOverThreeDigits(args);
    return Math.floor(args.reduce((prev, curr) => prev * curr));
  }

  divide(...args) {
    this.validateOverThreeDigits(args);
    return Math.floor(args.reduce((prev, curr) => prev / curr));
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
