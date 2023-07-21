import { ERROR_BY_VALIDATE, MAX_NUMBER } from './constants'

class Calculator {
  sum(a, b) {
    if (a > MAX_NUMBER) {
      throw new Error(ERROR_BY_VALIDATE.OVER_MAX_NUMBER)
    }
    if (b > MAX_NUMBER) {
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
