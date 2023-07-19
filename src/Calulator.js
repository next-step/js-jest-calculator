import MESSAGE from './constants/Message';
import { isCalculateError } from './utils';

class Calulator {
  static add(...args) {
    const [a, b] = args;
    if (isCalculateError(args)) return MESSAGE.ERROR;
    return a + b;
  }
  static subtract(...args) {
    const [a, b] = args;
    if (isCalculateError(args)) return MESSAGE.ERROR;
    return a - b;
  }
  static multiply(...args) {
    const [a, b] = args;
    if (isCalculateError(args)) return MESSAGE.ERROR;
    return a * b;
  }
  static divide(...args) {
    const [a, b] = args;
    if (isCalculateError(args)) return MESSAGE.ERROR;
    return a / b;
  }
}

export default Calulator;
