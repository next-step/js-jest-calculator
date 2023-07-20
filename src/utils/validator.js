import { ERROR_MESSAGE } from '../constants/message'

export const isNumber = (num) => Object.prototype.toString.call(num) === '[object Number]'

export const isValidNumbers = (...numbers) => {
  const isValid = numbers.every(number => isNumber(number))

  if (!isValid) {
    throw new Error(ERROR_MESSAGE.INVALID_NUMBER)
  }

  return true
}

export const isValidDigitByNumbers = (digit, ...numbers) => {
  const isValid = numbers.every(number => String(number).length < digit)

  if (!isValid) {
    throw new Error(ERROR_MESSAGE.INVALID_DIGIT)
  }

  return true
}