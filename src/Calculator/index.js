import { ERROR_BY_VALIDATE, MAX_NUMBER } from './constants'

class Calculator {
  validate(a, b) {
    if (a > MAX_NUMBER) {
      throw new Error(ERROR_BY_VALIDATE.OVER_MAX_NUMBER)
    }
    if (b > MAX_NUMBER) {
      throw new Error(ERROR_BY_VALIDATE.OVER_MAX_NUMBER)
    }
  }

  sum(a, b) {
    this.validate(a, b)

    return Math.floor(a + b)
  }

  substract(a, b) {
    this.validate(a, b)

    return a - b
  }

  multiply(a, b) {
    this.validate(a, b)

    return a * b
  }

  divide(a, b) {
    this.validate(a, b)

    return a / b
  }
}

export default Calculator
