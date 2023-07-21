import { overThreeLength } from './validation';

export default class Calculator {
  sum(...args) {
    overThreeLength(args);
    return Math.floor(args.reduce((prev, curr) => prev + curr));
  }

  subtract(...args) {
    overThreeLength(args);
    return Math.floor(args.reduce((prev, curr) => prev - curr));
  }

  multiply(...args) {
    overThreeLength(args);
    return Math.floor(args.reduce((prev, curr) => prev * curr));
  }

  divide(...args) {
    overThreeLength(args);
    return Math.floor(args.reduce((prev, curr) => prev / curr));
  }
}
