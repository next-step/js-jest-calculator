import { ERROR_MSG, LIMIT } from './constants'

export const isNumber = (num) => {
  if (typeof num !== 'number') throw new Error(ERROR_MSG.INVALID_NUMBER)
}

export const isValidDigits = (num) => {
  // 자리수가 세자리인지 판단
  if (!Number.isInteger(num)) return
  if (String(num).length > LIMIT) throw new Error(ERROR_MSG.INVALID_DIGIT)
}

export const validator = (...nums) => {
  nums.forEach((num) => {
    isNumber(num)
    isValidDigits(num)
  })
}

export const trunc = (num) => {
  const result = Math.trunc(num)

  if (result === -0) return Math.abs(result)
  return result
}
