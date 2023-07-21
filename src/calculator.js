import Validator from './validator';

class Calculator {
  static calculate(first, second, operation) {
    try {
      Validator.validate(first, second, operation);
    } catch (err) {
      throw new Error(err);
    }
  }

  static sum(first, second) {}

  static subtract(first, second) {}

  static multiply(first, second) {}

  static divide(first, second) {}
}

export default Calculator;
