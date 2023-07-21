import { ERROR_MSG } from './constants'

export const isNumber = (num) => {
  if (typeof num !== 'number') throw new Error(ERROR_MSG.INVALID_NUMBER)
}

export const isValidDigits = (num) => {
  // 자리수가 세자리인지 판단
  if (!Number.isInteger(num)) return
  if (String(num).length > 3) throw new Error(ERROR_MSG.INVALID_DIGIT)
}

export const validator = (...nums) => {
  nums.forEach((num) => {
    isNumber(num)
    isValidDigits(num)
  })
}

export const floor = (num) => {
  return Math.trunc(num)
}
