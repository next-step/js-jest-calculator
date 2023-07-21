import { ERROR_MESSAGE } from '../constants/message'
import { floor } from './math'

export const isNumber = (num) => !isNaN(num) && Object.prototype.toString.call(num) === '[object Number]'

export const isValidNumbers = (...numbers) => {
  const isValid = numbers.every(number => isNumber(number))

  if (!isValid) {
    throw new Error(ERROR_MESSAGE.INVALID_NUMBER)
  }

  return true
}

export const isValidDigitByNumbers = (limitDigit, ...numbers) => {
  const isValid = numbers.every(number => String(Math.abs(floor(number))).length <= limitDigit)

  if (!isValid) {
    throw new Error(ERROR_MESSAGE.INVALID_DIGIT)
  }

  return true
}