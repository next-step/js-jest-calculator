import { ERROR_MSG } from './constants'

export const validator = (...nums) => {
  nums.forEach((num) => {
    // 숫자인지 판단
    if (typeof num !== 'number') throw new Error(ERROR_MSG.INVALID_NUMBER)
    // 자리수가 세자리인지 판단
    if (String(num).length > 3) throw new Error(ERROR_MSG.INVALID_DIGIT)
  })
}

export const floor = (num) => {
  return Math.floor(num)
}
