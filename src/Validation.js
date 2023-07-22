import { ERROR } from './constants'

export const validator = (a, b) =>{
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error(ERROR["TYPE_NAN"])
  }

  if (a > 999 || b > 999) {
    throw new Error(ERROR["LESS_THAN_1000"])
  }

  if (a < -999 || b < -999) {
    throw new Error(ERROR["GREATER_THAN_MINUS_1000"])
  }

  return true
}
