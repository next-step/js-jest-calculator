import { LIMIT_DIGIT } from './constants/app'
import { ERROR_MESSAGE } from './constants/message'
import { isNumber, isValidDigitByNumbers } from './utils/validator'
import { calculatorHandler } from './handler'
import { sum, subtract, multiply, divide } from './utils/math'

export function Calculator() {
  if (!new.target) {
    return new Calculator()
  }

  this.value = 0
  this.getValue = () => Math.floor(this.value)
  this.setValue = (num) => {
    if (!isNumber(num)) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER)
    }

    this.value = num
  }

  this.sum = (...numbers) => {
    isValidDigitByNumbers(LIMIT_DIGIT, ...numbers)
    this.value = sum(...numbers)
  }
  this.subtract = (...numbers) => {
    isValidDigitByNumbers(LIMIT_DIGIT, ...numbers)
    this.value = subtract(...numbers)
  }
  this.multiply = (...numbers) => {
    isValidDigitByNumbers(LIMIT_DIGIT, ...numbers)
    this.value = multiply(...numbers)
  }
  this.divide = (...numbers) => {
    isValidDigitByNumbers(LIMIT_DIGIT, ...numbers)
    this.value = divide(...numbers)
  }

  return new Proxy(this, calculatorHandler)
}