import { overThreeDigits } from './validation';

export default class Calculator {
  sum(...args) {
    overThreeDigits(args);
    return Math.floor(args.reduce((prev, curr) => prev + curr));
  }

  subtract(...args) {
    overThreeDigits(args);
    return Math.floor(args.reduce((prev, curr) => prev - curr));
  }

  multiply(...args) {
    overThreeDigits(args);
    return Math.floor(args.reduce((prev, curr) => prev * curr));
  }

  divide(...args) {
    overThreeDigits(args);
    return Math.floor(args.reduce((prev, curr) => prev / curr));
  }
}
