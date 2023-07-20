import { ERROR_BY_VALIDATE } from './constants'

class Calculator {
  sum(a, b) {
    if (a > 999) {
      throw new Error(ERROR_BY_VALIDATE.OVER_MAX_NUMBER)
    }
    if (b > 999) {
      throw new Error(ERROR_BY_VALIDATE.OVER_MAX_NUMBER)
    }

    return a + b
  }

  substract(a, b) {
    return a - b
  }

  multiply(a, b) {
    return a * b
  }

  divide(a, b) {
    return a / b
  }
}

export default Calculator
