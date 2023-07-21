import { roundDown } from './utils/number';
import { overThreeLength } from './validation';

export class BasicOperation {
  sum(...args) {
    overThreeLength(args);
    return roundDown(args.reduce((prev, curr) => prev + curr));
  }

  subtract(...args) {
    overThreeLength(args);
    return roundDown(args.reduce((prev, curr) => prev - curr));
  }

  multiply(...args) {
    overThreeLength(args);
    return roundDown(args.reduce((prev, curr) => prev * curr));
  }

  divide(...args) {
    overThreeLength(args);
    return roundDown(args.reduce((prev, curr) => prev / curr));
  }
}
